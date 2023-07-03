import "./App.css";
import Records from "./components/Records/Records";
import NewRecord from "./components/NewRecords/NewRecord";
import { useState } from "react";
const Dummy_Records = [
  { id: "r1", name: "Arsal", reg: 10, date: new Date(2021, 7, 14) },
  { id: "r2", name: "Ali", reg: 20, date: new Date(2021, 8, 10) },
  { id: "r3", name: "Mueed", reg: 30, date: new Date(2022, 2, 1) },
  { id: "r4", name: "Ahmad", reg: 40, date: new Date(2023, 2, 11) },
];
function App() {
  const [records, setRecords] = useState(Dummy_Records);
  const showRecord = (recordObj) => {
    setRecords((prevRecords) => {
      return [recordObj, ...prevRecords];
    });
  };
  return (
    <div>
      <h2 className="records-heading" style={{ color: "black" }}>
        Student Management System
      </h2>
      <NewRecord onEnterRecord={showRecord} />
      <Records records={records} />
    </div>
  );
}

export default App;
