import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import PropTypes from "prop-types";

const Register = ({
  auth: { isAuthenticated, error, loading },
  registerUser,
  history
}) => {
  useEffect(() => {
    if (error !== null) {
      setErrors(error);
      clearErrors();
    }

    if (isAuthenticated) {
      history.push("/");
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState(error);

  const { name, email, password } = user;

  // onChange input function
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  // onSubmit function
  const onSubmit = e => {
    e.preventDefault();
    if (!name || !email || !password) {
      setErrors("Please enter all fields..");
      clearErrors();
    } else {
      registerUser({
        name,
        email,
        password
      });
      // clear Inputs
      setUser({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  // clear errors
  const clearErrors = () => {
    setTimeout(() => {
      setErrors("");
    }, 3000);
  };

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(Register);
