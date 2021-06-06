import React from "react";
import { useState } from "react";
import Axios from "axios";

function Display() {
  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    Axios.get("http://localhost:3002/read").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <div>
      <h1>Show Employees </h1>
      <button onClick={getEmployees}>Show Employees </button>
      {employeeList.map((val, key) => {
        return <div key={key}> {val.name} </div>;
      })}
    </div>
  );
}

export default Display;
