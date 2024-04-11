import "./App.css";
import Index from "./frontend/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontRoute from "./router/FrontRoute";
import { UserProvider } from "./frontend/context/useContext";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import IndexAdmin from "./backend/index";
import BackendRoute from "./router/backend";

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <UserProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />}>
                  {FrontRoute.map((route, index) => {
                    const Page = route.component;
                    return (
                      <Route key={index} path={route.path} element={<Page />} />
                    );
                  })}
                </Route>
                {/* backend route */}
                <Route path="/admin" element={<IndexAdmin />}>
                  {BackendRoute.map((route, index) => {
                    const Page = route.component;
                    return (
                      <Route key={index} path={route.path} element={<Page />} />
                    );
                  })}
                </Route>
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </Provider>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
