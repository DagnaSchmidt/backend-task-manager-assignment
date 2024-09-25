import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/tasks';

export const getTasks = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export const createTask = async (data) => {
    const response = await axios.post(baseUrl, data);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
};
