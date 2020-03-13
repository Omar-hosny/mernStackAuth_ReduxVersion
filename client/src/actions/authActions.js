import axios from "axios";

// Register user
export const registerUser = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    setLoading();
    const res = await axios.post("/api/auth/register", formData, config);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "REGISTER_FAILED",
      payload: err.response.data
    });
  }
};

// Login user
export const loginUser = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    setLoading();
    const res = await axios.post("/api/auth/login", formData, config);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "LOGIN_FAILED",
      payload: err.response.data.data
    });
  }
};

// logout user
export const logoutUser = () => {
  return {
    type: "LOGOUT"
  };
};

export const setLoading = () => {
  return {
    type: "SET_LOADING"
  };
};
