import { useState, useContext } from "react";
import { MainContext } from "../../Main";

// Please see utils/helpers.js for more info
import { handleInputValues } from "../../utils/helpers";

const MyCustomRange = ({ formFieldData }) => {
  const [rangeValue, setRangeValue] = useState(formFieldData.minValue);

  const allInfo = useContext(MainContext);
  const { schemaText } = allInfo.schemaInfo;
  const { setPersonData } = allInfo.personsInfo;
  const { setVehicleData } = allInfo.vehiclesInfo;

  const handleRangeValueChange = (e) => {
    setRangeValue(e.target.value);
    // all changes handled by handleInputValues function
    handleInputValues(e, schemaText, setPersonData, null, setVehicleData);
  };
  return (
    <div className="customRangeFlex">
      <label htmlFor={formFieldData.fieldName}>{formFieldData.label}</label>
      <div className="customRangeFlex">
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
