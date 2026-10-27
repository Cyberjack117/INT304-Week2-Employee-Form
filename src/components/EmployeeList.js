
import React from 'react';

function EmployeeList({ employees, message }) {
  return (
    <section className="employee-list">
      <h2>Employee List</h2>

      {message && (
        <p className="success-message">{message}</p>
      )}

      {employees.length === 0 ? (
        <p>No employees have been added yet.</p>
      ) : (
        <ul>
          {employees.map((employee, index) => (
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
