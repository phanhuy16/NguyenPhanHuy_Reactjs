import { useNavigate } from "react-router-dom";
import apiUser from "../../../api/apiUser";
import React, { useState } from "react";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = {
        username: username,
        address: address,
        email: email,
        password: password,
        phone: phone,
      };
      const response = await apiUser.createUser(user);
      console.log("Registrtion success: ", response);
      alert("Registrtion success");
      navigate("/");
    } catch (error) {
      console.log("Registration error", error);
    }
  };

  return (
    <>
      <div className="container py-3" style={{ width: "30%" }}>
        <h2 className="fw-bold text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Tên đăng nhập:
            </label>
            <input
              className="form-control"
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="address">
              Địa chỉ:
            </label>
            <input
              className="form-control"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="phone">
              Số điện thoại:
            </label>
            <input
              className="form-control"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Mật khẩu:
            </label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-2">
            <button className="btn btn-primary text-primary">Đăng Ký</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
