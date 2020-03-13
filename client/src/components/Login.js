import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import PropTypes from "prop-types";

const Login = ({
  auth: { isAuthenticated, error, loading },
  loginUser,
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
  }, [error, isAuthenticated, history.push]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState(error);

  const { email, password } = user;

  // onChange input function
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  // onSubmit function
  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      setErrors("Please enter all fields..");
      clearErrors();
    } else {
      loginUser({
        email,
        password
      });
      // clear Inputs
      setUser({
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

  return (
    <div className="layout">
      <form onSubmit={onSubmit}>
        <div className="container pt-5">
          {errors ? (
            <div className="alert alert-danger mb-1 ">{errors}</div>
          ) : null}
          <div className="row">
            <div className="col-md-6  mx-auto">
              <h2 className="text-center">Login</h2>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Enter your email address."
                  className="form-control"
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password."
                  className="form-control"
                  onChange={onChange}
                />
              </div>

              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-block"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(Login);
