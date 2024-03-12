import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: " ",
    email: "",
    phone: "",
    password: "",
    role: "",
    confirmpassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          phone: credentials.phone,
          password: credentials.password,
          role: credentials.role,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.token);
        // window.location.href = "/";
        if (json.user.role === "Student") {
          console.log(json.user.role);
          navigate("/stdDashboard");
        } else if (json.user.role === "Company") {
          console.log(json.user.role);
          navigate("/companyDashboard");
        }
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "calc(100vh - 56px)", gap: "12vw" }}
      >
        <h2
          style={{
            backgroundColor: "white",
            border: "2px solid white",
            borderRadius: "50px",
            padding: "10px 30px",
            textAlign: "center",
          }}
        >
          Signup
        </h2>
        <div
          style={{ width: "2px", height: "70vh", backgroundColor: "white" }}
        ></div>
        <form
          style={{
            backgroundColor: "currentcolor",
            borderRadius: "50px",
            padding: "41px",
            border: "2px solid white",
          }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">
              Name
            </label>
            <input
              required
              type="text"
              name="name"
              value={credentials.name}
              className="form-control"
              id="name"
              aria-describedby="nameHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={credentials.email}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text text-light">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label text-light">
              Phone
            </label>
            <input
              required
              type="phone"
              name="phone"
              className="form-control"
              id="phone"
              aria-describedby="phoneHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">
              Password
            </label>
            <input
              required
              name="password"
              type="password"
              value={credentials.password}
              className="form-control"
              id="password"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label text-light">
              Confirm Password
            </label>
            <input
              required
              name="confirmpassword"
              type="password"
              value={credentials.confirmpassword}
              className="form-control"
              id="confirmpassword"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label text-light">
              Role
            </label>
            <select name="role" id="role" required className="form-select" onChange={onChange}>
              <option value=""> Select Role</option>
              <option value="Student"> Student</option>
              <option value="Company"> Company</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
