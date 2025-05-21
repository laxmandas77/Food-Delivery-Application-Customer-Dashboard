import axios from "axios";

const API_URL = 'https://food-delivery-application-backend-production-dc3a.up.railway.app/api/foods'

export const fetchFoodList = async () => {
    try{
    const response = await axios.get(API_URL);
    return response.data;
    
    }catch(error){
        console.log('Error fetching the foodlist',error);
        throw error;
    }
}

export const fetchFoodDetails = async (id) => {
    try{
    const response = await axios.get(API_URL+"/"+id);
    return response.data;
    }catch(error){
        console.log('Error fetxhinf the fooddetails',error);
        throw error;
    }
}


