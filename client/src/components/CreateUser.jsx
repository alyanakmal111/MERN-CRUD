import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/createUser", { name, email, age })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(event) => setAge(event.target.value)}
            ></input>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
