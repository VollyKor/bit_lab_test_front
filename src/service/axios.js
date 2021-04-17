import axios from 'axios';

// axios.defaults.baseURL = 'https://bit-lab-test.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3010';

export const getAll = async (page = 1, limit = 50) => {
  const { data } = await axios.get(`/stats?page=${page}&limit=${limit}`);
  return data;
};

export const getDataById = async userId => {
  try {
    const { data } = await axios.get(`/stats/${userId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDataByDate = async (
  userId,
  dateFrom = '2019-08-10',
  dateTo = '2019-12-10',
) => {
  try {
    const { data } = await axios.get(
      `/stats/${userId}?dateFrom=${dateFrom}&dateTo=${dateTo} `,
    );
    return data;
  } catch (error) {
    throw error;
  }
};
