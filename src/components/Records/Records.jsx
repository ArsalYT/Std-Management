import React, { useState } from "react";
import RecordItem from "./RecordItem";
import "./Records.css";
import RecordsFilter from "./RecordsFilter";
import Card from "../UI/Card";
function Records(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectionHandler = (selection) => {
    setFilteredYear(selection);
  };
  const filteredRecords = props.records.filter((record) => {
    return record.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="records">
      <RecordsFilter
        value={filteredYear}
        onSelection={selectionHandler}
      ></RecordsFilter>
      {filteredRecords.length > 0 ? (
        filteredRecords.map(
          (record) => (
            // record.date.getFullYear().toString() === filteredYear ? (
            <RecordItem
              key={record.id}
              name={record.name}
              reg={record.reg}
              date={record.date}
            />
          )
          // ) : (
          //   <p>No Records Found</p>
          // )
        )
      ) : (
        <p style={{ color: "white", textAlign: "center" }}>No Records</p>
      )}
      {/* <RecordItem
        name={props.records[0].name}
        reg={props.records[0].reg}
        date={props.records[0].date}
      />
      <RecordItem
        name={props.records[1].name}
        reg={props.records[1].reg}
        date={props.records[1].date}
      /> */}
    </Card>
  );
}
export default Records;
