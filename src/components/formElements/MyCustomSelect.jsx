import { useContext } from "react";
import { MainContext } from "../../Main";

// Please see utils/helpers.js for more info
import { handleInputValues } from "../../utils/helpers";

const MyCustomSelect = ({ formFieldData }) => {
  const allInfo = useContext(MainContext);
  const { schemaText } = allInfo.schemaInfo;
  const { setPersonData } = allInfo.personsInfo;
  const { setDogData } = allInfo.dogsInfo;
  const { setVehicleData } = allInfo.vehiclesInfo;
  return (
    <div className="customSelectContainer">
      <label htmlFor={formFieldData.id}>{formFieldData.label}</label>

      <select
        name={formFieldData.fieldName}
        id={formFieldData.id}
        // all changes handled by handleInputValues function
        onChange={(event) =>
          handleInputValues(
            event,
            schemaText,
            setPersonData,
            setDogData,
            setVehicleData
          )
        }
      >
        {/* Mapping through all the values */}
        {formFieldData.values.map((selectValue) => (
          <option key={selectValue.value} value={selectValue.value}>
            {selectValue.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MyCustomSelect;
