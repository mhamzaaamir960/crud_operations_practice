import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EmployeeData() {
  const { id } = useParams();

  const [data, setData] = useState({
    id: "",
    employee_name: "",
    employee_salary: "",
    employee_age: "",
    employee_image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://dummy.restapiexample.com/api/v1/employee/${id}`;
        const res = await axios.get(url);
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Something went wrong!", error);
      }
    };
    fetchData();
  }, [id]);
  console.log(data.id)
  return (
    <div className="card">
      <span className="a">id: {data.id}</span>
      <span className="a">Employee Name: {data.employee_name}</span>
      <span className="a">Employee Salary: {data.employee_salary}</span>
      <span className="a">Employee Age: {data.employee_age}</span>
      <div>
        <button className="upbtn">Update</button>
        <button className="delbtn">Delete</button>
      </div>
    </div>
  );
}

export default EmployeeData;
