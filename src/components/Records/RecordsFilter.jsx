import React from "react";
import "./RecordsFilter.css";
function RecordsFilter(props) {
  const filterHandler = (event) => {
    props.onSelection(event.target.value);
  };
  return (
    <div className="records-filter">
      <div className="records-filter__control">
        <label style={{ color: "white" }}>Filter By Year </label>
        <select value={props.value} onChange={filterHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default RecordsFilter;
