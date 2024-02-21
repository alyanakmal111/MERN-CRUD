import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get("http:localhost:8080/getUser/" + id).then((result) => {
      setName(result.data.name);
      setEmail(result.data.email);
      setAge(result.data.age);
    });
  }, []);

  const Submit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:8080/updateUser/" + id, { name, email, age })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(event) => setName(event.target.value)}
              value={name || " "}
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
              value={email || " "}
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
              value={age || " "}
            ></input>
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
