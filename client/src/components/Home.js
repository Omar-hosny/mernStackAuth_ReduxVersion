import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <h1 className="text-center mt-5">Loading....</h1>;
  }

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-5">
            <h1 className="text-center">Home page</h1>
            <h2 className="text-center display-4 mt-5">
              This is home page protected page to access !
            </h2>
            <h3 className="text-center display-4 mt-5">
              This version using redux!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);
