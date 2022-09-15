// Please see utils/helpers.js for more info
import { handleInputValues } from "../../utils/helpers";

const MyCustomRadio = ({
  formFieldData,
  schemaText,
  setPersonData,
  setDogData,
  setVehicleData,
}) => {
  return (
    <div>
      <span>{formFieldData.label}</span>
      {/* Mapping through all the values from JSON schema */}
      {formFieldData.values.map((radioValue) => (
        <div key={radioValue.id}>
          <input
            type="radio"
            id={formFieldData.id}
            name={formFieldData.fieldName}
            value={radioValue.value}
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
          />
            <label htmlFor={radioValue.id}>{radioValue.label}</label>
        </div>
      ))}
    </div>
  );
};

export default MyCustomRadio;
