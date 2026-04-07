import axios from "axios";

const API_URL = "http://localhost:9090/employees";

export const getEmployees = () => axios.get(API_URL);
export const createEmployee = (data) => axios.post(API_URL, data);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);