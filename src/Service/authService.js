import axios from "axios";

const API_URL = "https://food-delivery-application-backend-production-dc3a.up.railway.app/api";

export const registerUser = async (data) => {
    try {
        const response = await axios.post(API_URL + "/register", data);
        return response;
    } catch (error) {
        throw error;
    }
}

export const login = async(data) => {
    try {
        const response = await axios.post(API_URL+"/login",data);
        console.log(response);
        return response;
    } catch (error) {
        throw error;
    }
}