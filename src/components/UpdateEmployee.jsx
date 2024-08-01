import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddEmployee.css";
import { useParams } from "react-router-dom";

function UpdateEmployee() {
  const { id } = useParams();
  const [data, setData] = useState({ name: "", age: "", salary: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://dummy.restapiexample.com/api/v1/employee/${id}`;
        const res = await axios.get(url);
        setData({
          name: res.data.data.employee_name,
          age: res.data.data.employee_age,
          salary: res.data.data.employee_salary,
        });
      } catch (error) {
        console.error("Something went wrong!", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://dummy.restapiexample.com/api/v1/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("Response: ", res.data);
    } catch (err) {
      console.log("Error: ", err);
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Update Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Update Age
        </label>
        <input
          type="number"
          name="age"
          className="form-control"
          id="age"
          value={data.age}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="salary" className="form-label">
          Update Salary
        </label>
        <input
          type="number"
          name="salary"
          className="form-control"
          id="salary"
          value={data.salary}
          onChange={handleChange}
        />
      </div>

      {loading ? (
        "loading..."
      ) : (
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      )}

      {error && <span className="text-danger">{error}</span>}
    </form>
  );
}

export default UpdateEmployee;
