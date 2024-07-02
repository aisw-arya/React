import axios from 'axios';

 
const url =import.meta.env.VITE_API_URL
const instance = axios.create({
  baseURL:url
});

export const fetchProducts = () => {
  return instance.get('/products')
    .then(res => {
      return res.data;
})
    .catch(error => {
      console.error('Error fetching products:', error);
      throw error; 
    });
};
