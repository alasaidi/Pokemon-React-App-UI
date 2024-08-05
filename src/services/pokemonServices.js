import http from "../common/httpCommon";

export const getPokemon = async () => {
  try {
    const result = await http.get("/pokemons/api/");
    console.log("API response:", result.data);
    return result.data; // Make sure you're returning the data, not the entire response
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};
