import API from "./axios";

// Register API
export const register = async (userData) => {
  try {
    const response = await API.post("/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login API
export const login = async (userData) => {
  try {
    const response = await API.post("/login", userData);

    // Save token in localStorage
    localStorage.setItem("token", response.data.token);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};