import React, { useState, useContext } from "react";
import apiUser from "../../../api/apiUser";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      identifier: email,
      password: password,
    };
    try {
      const response = await apiUser.LoginAdmin(data);
      console.log(response);
      var user = response.data.user;
      setUser(user);
      navigate("/admin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="form-dvp container-md ">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginAdmin;
