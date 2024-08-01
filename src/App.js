import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeesData from "./components/EmployeesData";
import EmployeeData from "./components/EmployeeData";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeesData />} />
      <Route path="/employee/:id" element={<EmployeeData />} />
      <Route path="/create" element={<AddEmployee />} />
      <Route path="/delete/:id" element={<AddEmployee />} />
      <Route path="/update/:id" element={<UpdateEmployee />} />
    </Routes>
  );
}

export default App;
