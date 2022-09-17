import { useContext } from "react";
import { MainContext } from "../../Main";

// Please see utils/helpers.js for more info
import { handleInputValues } from "../../utils/helpers";

const MyCustomRadio = ({ formFieldData }) => {
  // state values/setState functions from MainContext
  const allInfo = useContext(MainContext);
  const { schemaText } = allInfo.schemaInfo;
  const { setPersonData } = allInfo.personsInfo;
  const { setDogData } = allInfo.dogsInfo;

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
              handleInputValues(event, schemaText, setPersonData, setDogData)
            }
          />
            <label htmlFor={radioValue.id}>{radioValue.label}</label>
        </div>
      ))}
    </div>
  );
};

export default MyCustomRadio;
