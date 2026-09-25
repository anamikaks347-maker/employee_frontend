import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://employee-backend-3-mez9.onrender.com/"
})

export default axiosInstance