import React, { useState } from "react";
import "./App.css";
import { Table } from "react-bootstrap";

function App() {
  const details = [
    { name: "SAURAV BHANDARI", qualification: "B-Tech", place: "New Delhi" },
  ];
  const [users, setUsers] = useState(details);
  return (
    <div className="App">
      <h1>Details</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.qualification}</td>
              <td>{item.place}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button
        id="click"
        onClick={function () {
          setUsers([]);
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
