import axios from "axios";

const API_BASE = "http://20.244.56.144/evaluation-service";

export const getLatestPosts = async () => {
  const response = await axios.get(`${API_BASE}/posts?type=latest`);
  return response.data.posts;
};

export const getTrendingPosts = async () => {
  const response = await axios.get(`${API_BASE}/posts?type=popular`);
  return response.data.posts;
};

export const getTopUsers = async () => {
  const response = await axios.get(`${API_BASE}/users/top`);
  return response.data.users;
};
