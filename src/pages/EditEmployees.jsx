import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {getEmployeeById,updateEmployee} from '../services/allApi'

function EditEmployees() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [employee, setEmployee] = useState({
    Id:"",
    name: "",
    email: "",
    department: "",
    salary: "",
    joiningDate: ""
  })

  const getEmployee = async () => {
    try {

      const response = await getEmployeeById(id)

      setEmployee(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEmployee()
  }, [id])

  const handleUpdate = async (e) => {

    e.preventDefault()

    try {

      await updateEmployee(id, employee)

      alert("Employee updated successfully")

      navigate("/")

    } catch (error) {
      console.log(error)
    }
  }

  return (
<div className="container mt-4">
<h2 className="text-center mb-4">Edit Employee</h2>
<form className="card p-4 shadow" onSubmit={handleUpdate}>
<input type="text" className="form-control mb-3" placeholder="Employee Name" value={employee.id} onChange={(e) =>
setEmployee({
            ...employee,
              id: e.target.value
            })
          }
          required
        />
<input type="text" className="form-control mb-3" placeholder="Employee Name" value={employee.name} onChange={(e) =>
            setEmployee({
              ...employee,
              name: e.target.value
            })
          }
          required
        />
<input type="email" className="form-control mb-3" placeholder="Email"value={employee.email}onChange={(e) =>
            setEmployee({
              ...employee,
              email: e.target.value
            })
          }
          required
        />

<input type="text" className="form-control mb-3" placeholder="Department"value={employee.department}onChange={(e) =>
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
<button type="submit"className="btn btn-success">Update Employee</button>
</form>

    </div>
  )
}

export default EditEmployees