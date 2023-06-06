import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function save(event: React.FormEvent) {
    event.preventDefault();
    const successMessage = "User Registration Successful";
    try {
      const response = await axios.post("http://localhost:8085/api/save", {
        username: username,
        email: email,
        password: password,
      });

      if (response.data === username) {
        navigate("/login");
      }
      alert(successMessage);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="login-page">
        <div className="card">
          <h1>User Registration</h1>

          <form>
            <div className="form-group">
              <label>User name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Name"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              onClick={save}
            >
              Save
            </button>

            <Link to ={'/login'}>
                <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
