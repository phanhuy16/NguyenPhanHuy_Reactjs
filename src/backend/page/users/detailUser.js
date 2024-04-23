import React, { useState, useEffect } from "react";
import apiUser from "../../../api/apiUser";
import { useParams } from "react-router-dom";

const DetailUser = () => {
  const { id } = useParams();

  const [users, setUsers] = useState({});
  useEffect(() => {
    apiUser.getUserById(id).then((res) => {
      try {
        const userData = {
          username: res.username,
          email: res.email,
          address: res.address,
          phone: res.phone,
        };
        setUsers(userData);
      } catch (error) {
        console.log("userData list:", error);
      }
    });
  }, [id]);

  return (
    <div className="container">
      <h1 className="my-4">Thông tin người dùng</h1>
      <div className="card">
        <div className="card-body">
          <div>
            <p className="card-text">Username: {users.username}</p>
            <p className="card-text">Email: {users.email}</p>
            <p className="card-text">Địa chỉ: {users.address}</p>
            <p className="card-text">Điện thoại: {users.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
