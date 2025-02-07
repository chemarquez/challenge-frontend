import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

export const fetchData = async (endpoint, jwtToken) => {
  console.log("endpoint in api: " + baseUrl + endpoint);
  console.log("jwtToken: " + jwtToken);

  try {
    const response = await axios.get(`${baseUrl}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log("response: " + response.data);
    return response.data;
  } catch (error) {
    console.log("Error in api.js: ", error);
    throw error;
  }
};

export const deleteTrack = async (uuid, jwtToken) => {
  try {
    const response = await axios.delete(`${baseUrl}/api/tracks/${uuid}`, {
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error deleting track in api.js: ", error);
    throw error;
  }
};

export const postData = async (endpoint, jwtToken) => {
  console.log("endpoint in api: " + baseUrl + endpoint);
  console.log("jwtToken: " + jwtToken);

  try {
    const response = await axios.post(`${baseUrl}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log("response: " + response.data);
    return response.data;
  } catch (error) {
    console.log("Error in api.js: ", error);
    throw error;
  }
};

