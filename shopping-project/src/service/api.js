import axios from "axios";

const API_URL='http://localhost:8080';



export const getProducts=async(id)=>{
    id= id || '';
    try{
        return await axios.get(`${API_URL}/products/${id}`);
    }catch(error){
        console.log('Error while calling getProducts api',error);
    }
}

export const addProduct=async(product)=>{
    // try{
        return await axios.post(`${API_URL}/product`,product);
    // }catch(error){
    //     console.log('Error while calling addProduct api ',error.message);
    // }
}

export const deleteProduct =async(id)=>{
    // console.log("delete");
    // try{
        return await axios.delete(`${API_URL}/product/${id}`);
    // }catch(error){
    //     console.log('Error while calling getProducts api',error.message);
    // }
}

export const editProduct=async(id,product)=>{
    // try{
        return await axios.put(`${API_URL}/product`,product);
    // }catch(error){
    //     console.log('Error while calling getProduct api',error.message);
    // }
}