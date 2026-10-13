import React from 'react';
import '../EmployeeForm.css';

// The class structure follows the Week 2 instruction manual.
class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const employee = { ...this.state };

    // The manual requires logging the submitted values.
    console.log('New employee:', employee);

    // A callback prop lets the parent App receive the new employee.
    if (typeof this.props.onAddEmployee === 'function') {
      this.props.onAddEmployee(employee);
    }

    this.setState({ name: '', email: '', phone: '' });
  }

  render() {
    return (
      <section className="employee-form-section" aria-labelledby="add-employee-heading">
        <h1 id="add-employee-heading">Add Employee</h1>
        <form className="employee-form" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <label htmlFor="employee-name">Name:</label>
            <input
              id="employee-name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              autoComplete="name"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="employee-email">Email:</label>
            <input
              id="employee-email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              autoComplete="email"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="employee-phone">Phone:</label>
            <input
              id="employee-phone"
              name="phone"
              type="tel"
              value={this.state.phone}
              onChange={this.handleInputChange}
              autoComplete="tel"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit">Add</button>
          </div>
        </form>
      </section>
    );
  }
}

export default EmployeeForm;
