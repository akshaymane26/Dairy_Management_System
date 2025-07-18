import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
    headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        // 'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
    }
});

export default axiosInstance;
//// Optional: Add a request interceptor for attaching tokens or logging
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // You can attach a token here if needed
//     const token = localStorage.getItem("token"); // or from Redux state
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Optional: Add a response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // You can globally handle errors here
//     console.error("API Error:", error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );
