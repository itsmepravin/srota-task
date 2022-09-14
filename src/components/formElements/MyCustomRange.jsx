import { useState } from "react";

const MyCustomRange = ({ formFieldData }) => {
  const [rangeValue, setRangeValue] = useState(formFieldData.minValue);

  const handleRangeValueChange = (e) => {
    setRangeValue(e.target.value);
  };
  return (
    <div style={{ display: "flex" }}>
      <label htmlFor={formFieldData.fieldName}>{formFieldData.label}</label>
      <div style={{ display: "flex" }}>
        <input
          type="range"
          id={formFieldData.id}
          name={formFieldData.fieldName}
          min={formFieldData.minValue}
          max={formFieldData.maxValue}
          step={formFieldData.stepValue}
          onChange={(event) => handleRangeValueChange(event)}
        ></input>
        <span>{rangeValue}</span>
      </div>
    </div>
  );
};

export default MyCustomRange;
