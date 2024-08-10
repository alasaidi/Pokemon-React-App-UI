import axiosService from "../common/httpCommon";

export const getPokemon = async () => {
  try {
    const result = await axiosService.get("/pokemons/api/");
    console.log("API response:", result.data);
    return result.data; // Make sure you're returning the data, not the entire response
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};

export const create = async (data = {}) => {
  try {
    const result = await axiosService.post("/players/api/login", data);
    if (result.data && result.data.token) {
      localStorage.setItem("token", result.data.token);
    }
    return result;
  } catch (error) {
    console.error("Error Login Player:", error.response?.data || error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    const result = await axiosService.get("/players/api/logout");
    localStorage.removeItem("token");
    return result;
  } catch (err) {
    console.error("Error Logout Player:", err.response?.data || err.message);
    throw err;
  }
};
