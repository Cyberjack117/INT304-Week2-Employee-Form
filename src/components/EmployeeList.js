import React, { useState } from 'react';

function EmployeeList({ employees, message }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="employee-list">
      <h2>Employee List</h2>

      {message && (
        <p className="success-message">{message}</p>
      )}

      <div className="employee-search">
        <label htmlFor="employee-search">Search Employees</label>
        <input
          id="employee-search"
          type="search"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {employees.length === 0 ? (
        <p>No employees have been added yet.</p>
      ) : filteredEmployees.length === 0 ? (
        <p>No employees match your search.</p>
      ) : (
        <ul>
          {filteredEmployees.map((employee, index) => (
            <li key={`${employee.email}-${index}`}>
              <strong>{employee.name}</strong>
              <p>Email: {employee.email}</p>
              <p>Phone: {employee.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default EmployeeList;
