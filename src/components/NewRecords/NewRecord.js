import RecordForm from "./RecordForm";
import "./NewRecord.css";
function NewRecord(props) {
  // let count = 1;
  const recordHandler = (newRecord) => {
    const recordData = { ...newRecord, id: Math.random() };
    props.onEnterRecord(recordData);
  };
  return (
    <div className="new-record">
      <RecordForm onRecord={recordHandler} />
    </div>
  );
}
export default NewRecord;
