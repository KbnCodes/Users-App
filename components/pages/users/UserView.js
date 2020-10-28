import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
const UserView = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await Axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container">
      <Link className="btn btn-primary mt-3" to="/">
        Home
      </Link>
      <h1 className="display-4 text-center">User ID: {id}</h1>
      <hr />
      <ul className="list-group w-50 mx-auto justify-content-center text-center">
        <li className="list-group-item">Name:{user.name}</li>
        <li className="list-group-item">User Name:{user.username}</li>
        <li className="list-group-item">Email:{user.email}</li>
        <li className="list-group-item">Phone:{user.phone}</li>
        <li className="list-group-item">Website:{user.website}</li>
      </ul>
    </div>
  );
};

export default UserView;
