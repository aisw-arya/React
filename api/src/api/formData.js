import axios from 'axios';

export const postFormData = (data) => {
  const url = `${import.meta.env.VITE_OUTLET_BASE_URL}/products`
  console.log(data)
  return axios.post(url, data).then(
    (res) => {
      console.log(res.data)
      return res.data;
    })
    .catch((error) => {
      console.log('Error while posting data:', error);
      throw error;
    });
};
