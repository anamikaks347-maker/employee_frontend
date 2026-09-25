import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
<Link to={"/"} className="navbar-brand fw-bold">Employee Management</Link>
<div className="d-flex gap-2">
<Link to={"/"} className="btn btn-outline-light">Employees</Link>
<Link to="/add" className="btn btn-primary">Add Employee</Link>
</div>
</nav>
  )
}

export default Header