import axiosInstance from "./axiosInstance"

// GET /employees
export const getAllEmployees = () => {
  return axiosInstance.get("/employees")
}

// GET /employees/:id
export const getEmployeeById = (id) => {
  return axiosInstance.get(`/employees/${id}`)
}

// POST /employees
export const addEmployee = (employee) => {
  return axiosInstance.post("/employees", employee)
}

// PUT /employees/:id
export const updateEmployee = (id, employee) => {
  return axiosInstance.put(`/employees/${id}`, employee)
}

// DELETE /employees/:id
export const deleteEmployee = (id) => {
  return axiosInstance.delete(`/employees/${id}`)
}