import axios from 'axios';

const API = axios.create({
  baseURL: 'http://backend.test.usenobi.com:8000/',
  timeout: 1000,
});

export const getApi = async ({url, params}) => {
  const response = await API.get(url, params);
  return response.data;
};

export const postApi = async ({url, body}) => {
  const response = await API.post(url, body);
  return response.data;
};
