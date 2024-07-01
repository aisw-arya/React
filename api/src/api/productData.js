import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
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
