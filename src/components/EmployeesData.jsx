import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EmployeesData.css";
import { Link } from "react-router-dom";

function EmployeesData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://dummy.restapiexample.com/api/v1/employees";
        const res = await axios.get(url);
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Something went wrong!", error);
      }
    };
    fetchData();
  }, []);

  const handleClick = async (id) => {
    // e.preventDefault();
    try {
      let res = await axios.delete(
        `https://dummy.restapiexample.com/public/api/v1/delete/${id}`
      );
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">React CRUD Operations</h1>
      <Link className="upbtn" to={"/create"}>
        Add New Employee
      </Link>
      <div className="cards">
        {data ? (
          data.map((dta) => (
            <div key={dta.id} className="card">
              <span className="a">id: {dta.id}</span>
              <span className="a">Employee Name: {dta.employee_name}</span>
              <div>
                <Link to={`/employee/${dta.id}`} className="delbtn">
                  Details
                </Link>
                <button className="upbtn">Update</button>
                <button className="delbtn" onClick={() => handleClick(dta.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <span className="loading">loading...</span>
        )}
      </div>
    </div>
  );
}

export default EmployeesData;
