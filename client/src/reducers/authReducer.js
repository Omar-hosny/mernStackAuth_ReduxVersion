const initialState = {
  token: null,
  isAuthenticated: null,
  loading: false,
  user: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        user: action.payload.user,
        isAuthenticated: true
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };
    case "REGISTER_FAILED":
      return {
        ...state,
        user: null,
        loading: false,
        isAuthenticated: false,
        error: action.payload
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        loading: false
      };
    default:
      return state;
  }
};
