import { useContext, useEffect } from "react";
import UserContext from "../../context/useContext";
import { useNavigate } from "react-router-dom";

const LogoutUser = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    setUser("");
    navigate("/");
  });
  return (
    <>
      <h1>LogoutUser</h1>
    </>
  );
};

export default LogoutUser;
