import React from "react";
import Card from "../UI/Card";
import "./RecordItem.css";
import RecordDate from "./RecordDate";
function RecordItem(props) {
  return (
    <Card className="record-item">
      <RecordDate date={props.date} />
      <div className="record-item__description">
        <h2>{props.name}</h2>
      </div>
      <div className="record-item__reg">{props.reg}</div>
    </Card>
  );
}
export default RecordItem;
