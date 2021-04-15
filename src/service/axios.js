import axios from 'axios';

export const getAll = async (page = 1, limit = 50) => {
  const { data } = await axios.get(
    `https://bit-lab-test.herokuapp.com/stats?page=${page}&limit=${limit}`,
  );
  return data.data;
};

export const getDataById = async userId => {
  const { data } = await axios.get(
    `https://bit-lab-test.herokuapp.com/stats/${userId}`,
  );
  console.log('axios', data);
  return data;
};
