import axios from "axios";

const API_URL = "https://food-delivery-application-backend-production-dc3a.up.railway.app/api/cart";

export const addToCart = async(foodId,token) => {
    try {
        await axios.post(API_URL,{foodId},{headers: {"Authorization":`Bearer ${token}`}});
    } catch (error) {
        console.error('Error while adding Qty from the cart Data',error);
    }

} 

export const removeQtyFromCart = async(foodId,token) => {
    try {
        await axios.post(API_URL+"/remove",{foodId},{headers: {"Authorization":`Bearer ${token}`}}); 
    } catch (error) {
        console.error('Error while romving Qty from  the cart Data',error);
    }

} 

export const getCartData = async(token) => {
    try {
        const response = await axios.get(API_URL,{headers: {"Authorization":`Bearer ${token}`}});
        return response.data.items;
    } catch (error) {
        console.error('Error while fetching the cart Data',error);
    }

} 