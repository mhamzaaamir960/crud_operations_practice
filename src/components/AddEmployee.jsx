import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddEmployee.css";

function AddEmployee() {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      let res = await axios.post(
        "https://dummy.restapiexample.com/api/v1/create",
        data
      );
      console.log("Response: ", res.data);
      setData({ name: "", age: "", salary: "" });
    } catch (err) {
      console.log("Error: ", err);
      setError(err.message || "error occured");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Employee Name
        </label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Employee Age
        </label>
        <input
          type="number"
          name="age"
          class="form-control"
          id="age"
          value={data.age}
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Employee Salary
        </label>
        <input
          type="number"
          name="salary"
          class="form-control"
          id="salary"
          value={data.salary}
          onChange={handleChange}
        />
      </div>

      {loading ? (
        "loading..."
      ) : (
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      )}

      <span>{error ? error : "successfull"}</span>
    </form>
  );
}

export default AddEmployee;
