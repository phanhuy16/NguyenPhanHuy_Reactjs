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
      console.log(response);
      console.log("Registrtion success: ", response);
      alert("Registrtion success");
      navigate("/");
    } catch (error) {
      console.log("Registration error", error);
    }
  };

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.heading}>Form Đăng Ký</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="username">
              Tên đăng nhập:
            </label>
            <input
              style={styles.input}
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="address">
              Địa chỉ:
            </label>
            <input
              style={styles.input}
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="phone">
              Số điện thoại:
            </label>
            <input
              style={styles.input}
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">
              Mật khẩu:
            </label>
            <input
              style={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="confirm_password">
            Xác nhận mật khẩu:
          </label>
          <input
            style={styles.input}
            type="password"
            id="confirm_password"
            name="confirmPassword"
            required
          />
        </div> */}
          <div style={styles.formGroup}>
            <button style={styles.button} type="submit">
              Đăng Ký
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
    textTransform: "uppercase",
  },
  form: {
    marginBottom: "0",
  },
  formGroup: {
    marginBottom: "25px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#666",
  },
  input: {
    width: "calc(100% - 22px)",
    padding: "12px 10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "10px",
    transition: "border-color 0.3s ease",
  },
  passwordInfo: {
    fontSize: "12px",
    color: "#888",
    marginTop: "5px",
  },
  button: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "background-color 0.3s ease",
  },
  passwordStrength: {
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
  },
};
