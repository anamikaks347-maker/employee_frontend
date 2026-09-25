import React, { useState } from 'react'
import { addEmployee } from '../services/allApi'
import { useNavigate } from 'react-router-dom'

function AddEmployees() {

  const navigate = useNavigate()

  const [employee, setEmployee] = useState({
    id:"",
    name: "",
    email: "",
    department: "",
    salary: "",
    joiningDate: ""
  })

  const handleAdd = async (e) => {
    e.preventDefault()

    try {

      await addEmployee(employee)

      alert("Employee added successfully")

      navigate("/")

    } catch (error) {
      console.log(error)
    }
  }

  return (

<div className="container mt-4">
<h2 className="text-center mb-4">Add Employee</h2>
<form className="card p-4 shadow" onSubmit={handleAdd}>
<input type="text" className="form-control mb-3" placeholder="Enter Id"value={employee.id}onChange={(e) =>
            setEmployee({
              ...employee,
              id: e.target.value
            })
          }
          required
        />
<input type="text"className="form-control mb-3"placeholder="Employee Name" value={employee.name}onChange={(e) =>
            setEmployee({
              ...employee,
              name: e.target.value
            })
          }
          required
        />

<input type="email"className="form-control mb-3"placeholder="Email"value={employee.email}onChange={(e) =>
            setEmployee({
              ...employee,
              email: e.target.value
            })
          }
          required
        />
 <input type="text" className="form-control mb-3" placeholder="Department" value={employee.department}onChange={(e) =>
            setEmployee({
              ...employee,
              department: e.target.value
            })
          }
          required
        />
<input type="number" className="form-control mb-3" placeholder="Salary" value={employee.salary}onChange={(e) =>
            setEmployee({
              ...employee,
              salary: e.target.value
            })
          }
          required
        />

<input type="date" className="form-control mb-3" value={employee.joiningDate}onChange={(e) =>
            setEmployee({
              ...employee,
              joiningDate: e.target.value
            })
          }
          required
        />
<button type="submit" className="btn btn-primary">Add Employee </button>
</form>

    </div>
  )
}

export default AddEmployees