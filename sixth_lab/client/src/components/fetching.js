import axios from "axios";

export const getDesks = ( searchQuery, selectedCategory, sortOrder ) => {
    return axios.get("http://localhost:3001/read", {params: { searchQuery, selectedCategory, sortOrder } })
};

export const getOne = (id) => {
    return axios.get(`http://localhost:3001/product/${id}`)
}