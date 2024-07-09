import axios from 'axios';

export const fetchProducts = () => {
  const url = `${import.meta.env.VITE_OUTLET_BASE_URL}/product`;
  return axios.get(url)
    .then((res) => {
      return res.data; 
    })
    .catch((error) => {
      console.log(error); 
      throw error; 
    });
};
