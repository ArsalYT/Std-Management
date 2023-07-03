import React from "react";
import "./RecordDate.css";
function RecordDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="record-date">
      <div className="record-date__month">{month}</div>
      <div className="record-date__day">{day}</div>
      <div className="record-date__year">{year}</div>
    </div>
  );
}

export default RecordDate;
