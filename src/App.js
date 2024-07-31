import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeesData from "./components/EmployeesData";
import EmployeeData from "./components/EmployeeData";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeesData />} />
      <Route path="/employee/:id" element={<EmployeeData />} />
      <Route path="/create" element={<AddEmployee />} />
      <Route path="/delete/:id" element={<AddEmployee />} />
    </Routes>
  );
}

export default App;
