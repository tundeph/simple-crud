import React from "react";
import { useState } from "react";
import Axios from "axios";

function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3002/create", {
      name: name,
      age: age,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
        },
      ]);
    });
  };

  return (
    <div className="">
      <h1>Add Employess</h1>
      <label>Name: </label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Age: </label>
      <input
        type="number"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <button onClick={addEmployee}>Add Employee </button>
      {employeeList.map((val, key) => {
        return <div key={key}> {val.name} </div>;
      })}
    </div>
  );
}

export default Home;
