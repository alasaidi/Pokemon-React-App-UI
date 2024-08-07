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
    const result = await axiosService.post("players/api/login", data);
    return result;
  } catch (error) {
    console.error("Error Login Plyaer:", error.response?.data || error.message);
    throw error;
  }
};
