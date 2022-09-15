// Please see utils/helpers.js for more info
import { handleInputValues } from "../../utils/helpers";

const MyCustomTextArea = ({
  formFieldData,
  schemaText,
  setPersonData,
  setDogData,
  setVehicleData,
}) => {
  return (
    <>
      <p>
        <label htmlFor={formFieldData.fieldName}>{formFieldData.label}</label>
      </p>
      <textarea
        id={formFieldData.id}
        name={formFieldData.id}
        rows={formFieldData.rows}
        cols={formFieldData.columns}
        defaultValue={formFieldData.description}
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
    </>
  );
};

export default MyCustomTextArea;
