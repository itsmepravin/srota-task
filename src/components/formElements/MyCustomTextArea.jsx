import { useContext } from "react";
import { MainContext } from "../../Main";

// Please see utils/helpers.js for more info
import { handleInputValues } from "../../utils/helpers";

const MyCustomTextArea = ({ formFieldData }) => {
  const allInfo = useContext(MainContext);
  const { schemaText } = allInfo.schemaInfo;
  const { setPersonData } = allInfo.personsInfo;
  const { setVehicleData } = allInfo.vehiclesInfo;
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
            null,
            setVehicleData
          )
        }
      />
    </>
  );
};

export default MyCustomTextArea;
