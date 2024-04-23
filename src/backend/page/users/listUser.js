import { useEffect, useState } from "react";
import apiUser from "../../../api/apiUser";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiUser.getAll().then((res) => {
      try {
        const usersData = res.map((item) => {
          return {
            id: item.id,
            username: item.username,
            email: item.email,
            phone: item.phone,
            address: item.address,
          };
        });
        setUsers(usersData);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    });
  }, []);

  return (
    <>
      <h3 className="text-success mb-5">Người dùng</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên người dùng</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <Link to="/admin/detailuser">
                    <TbListDetails />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListUser;
