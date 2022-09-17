import { useContext } from "react";
import { MainContext } from "../../Main";

// Please see utils/helpers.js for more info
import { handleInputValues } from "../../utils/helpers";

const MyDefaultFormElement = ({ formFieldData }) => {
  const allInfo = useContext(MainContext);
  const { schemaText } = allInfo.schemaInfo;
  const { setPersonData } = allInfo.personsInfo;
  const { setDogData } = allInfo.dogsInfo;
  const { setVehicleData } = allInfo.vehiclesInfo;
  return (
    <>
      <div>
        <label htmlFor={formFieldData.fieldName}>{formFieldData.label}</label>
        <input
          type={formFieldData.type}
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
        />
      </div>
      <br />
    </>
  );
};

export default MyDefaultFormElement;
