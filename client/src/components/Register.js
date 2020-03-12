import React, { useState, useEffect } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState("");

  const { name, email, password } = user;

  // onChange input function
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  // onSubmit function
  const onSubmit = e => {
    e.preventDefault();
    if (!name || !email || !password) {
      setErrors("Please enter all fields..");
      clearErrors();
    }
    // clear Inputs
    setUser({
      name: "",
      email: "",
      password: ""
    });
  };

  // clear errors
  const clearErrors = () => {
    setTimeout(() => {
      setErrors("");
    }, 3000);
  };

  return (
    <div className="layout">
      <form onSubmit={onSubmit}>
        <div className="container pt-5">
          {errors ? <div className="alert alert-danger"> {errors} </div> : null}
          <div className="row">
            <div className="col-md-6  mx-auto">
              <h2 className="text-center">Register your account</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  name="name"
                  type="text"
                  placeholder="Enter your name."
                  className="form-control"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  value={email}
                  name="email"
                  placeholder="Enter your email address."
                  className="form-control"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  name="password"
                  type="password"
                  placeholder="Enter your password."
                  className="form-control"
                  onChange={onChange}
                />
              </div>

              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
