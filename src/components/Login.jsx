import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_user = {
      name,
      password,
    };
    axios
      .post("http://localhost:4000/", new_user)
      .then((res) => {
        console.log(res.data);
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container my-5">
        <div className="row ${1| ,row-cols-2,row-cols-3, auto,justify-content-md-center,|}">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="formId1">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="formId1">Password</label>
              </div>
              <button className=" btn btn-primary" type="submit">
                Submit
              </button>
              <Link to="/signup"><button className=" btn btn-success" type="submit">
               Signup
              </button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
