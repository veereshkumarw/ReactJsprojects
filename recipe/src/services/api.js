import axios  from "axios";
import { API_URL } from "../constants/Constant";

// axios is used to fetch api and this asynchronus get api so use asyn and await

export const getRecipes= async (searchedRes) => {
    try {
        let response = await axios.get(`${API_URL}/search?q=${searchedRes}`);
        return response.data;
        // axios return in form of data
    } catch (error) { 
        console.log("caught error", error.message);
        return error.response;
    }
}

export const getRecipe= async (searchedRes) => {
    try {
        let response = await axios.get(`${API_URL}/get?rId=${searchedRes}`);
        return response.data;
        // axios return in form of data
    } catch (error) { 
        console.log("caught error", error.message);
        return error.response;
    }
}