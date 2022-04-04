import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    employees: []
  };

  async componentDidMount() {
    const response = await fetch('/api/v1/employees');
    const body = await response.json();
    this.setState({employees: body});
  }

  render() {
    const {employees} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h2>employees</h2>
              {employees.map(employee =>
                  <div key={employee.id}>
                    {employee.firstName} {employee.lastName}({employee.emailId})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;
