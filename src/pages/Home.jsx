import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllEmployees, deleteEmployee } from '../services/allApi'

function Home() {

  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    try {
      const response = await getAllEmployees()
      setEmployees(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEmployees()
  }, [])

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    )

    if (confirmDelete) {
      try {
        await deleteEmployee(id)
        getEmployees()

      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
<div className="container mt-4">

<div className="d-flex justify-content-between mb-3">
<h2>Employee List</h2>
<Link to="/add" className="btn btn-primary">Add Employee</Link>
</div>

<table className="table table-bordered table-striped">
<thead className="table-dark">
<tr>
  <th>ID</th>
  <th>Name</th>
  <th>Email</th>
  <th>Department</th>
  <th>Salary</th>
  <th>Joining Date</th>
  <th>Actions</th>
</tr>
</thead>
<tbody>
     {
      employees.map((employee) => (
        <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.department}</td>
        <td>{employee.salary}</td>
        <td>{employee.joiningDate}</td>
    <td>
    <Link to={`/edit/${employee.id}`}className="btn btn-warning btn-sm me-2">Edit</Link>
<button className="btn btn-danger btn-sm" onClick={() => handleDelete(employee.id)}>Delete</button>
</td>
</tr>
))
}
</tbody>
</table>
</div>
)
}

export default Home