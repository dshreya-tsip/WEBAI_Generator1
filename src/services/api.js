import axios from "axios";

const API_BASE = "http://localhost:8000/api"; // change later

export const uploadSRS = (formData) =>
  axios.post(`${API_BASE}/upload-srs`, formData);

export const generateTestCases = (payload) =>
  axios.post(`${API_BASE}/generate`, payload);

export const downloadTestCases = (id) =>
  axios.get(`${API_BASE}/download/${id}`, { responseType: "blob" });

