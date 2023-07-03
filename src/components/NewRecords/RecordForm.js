import { useState } from "react";
import "./RecordForm.css";

function RecordForm(props) {
  const [studentName, setStudentName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [date, setDate] = useState("");
  const nameChangeHandler = (event) => {
    setStudentName(event.target.value);
  };
  const regChangeHandler = (event) => {
    setRegNumber(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const submitData = {
      name: studentName,
      reg: +regNumber,
      date: new Date(date),
    };
    props.onRecord(submitData);
    setDate("");
    setRegNumber("");
    setStudentName("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-record__controls">
        <div className="new-record__control">
          <input
            type="text"
            placeholder="Student's Name"
            onChange={nameChangeHandler}
            value={studentName}
          />
        </div>
        <div className="new-record__control">
          <input
            type="number"
            placeholder="Registration Number"
            min={1}
            onChange={regChangeHandler}
            value={regNumber}
          />
        </div>
        <div className="new-record__control">
          <input
            type="date"
            placeholder="Joining Date"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-record__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
export default RecordForm;
