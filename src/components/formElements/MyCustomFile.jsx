import { useContext } from "react";
import { MainContext } from "../../Main";

// Please see utils/helpers.js for more info
import { _handleImageSave } from "../../utils/helpers";

// Small library to convert image to base64
import FileBase64 from "react-filebase64";

const MyCustomFile = ({ formFieldData }) => {
  const allInfo = useContext(MainContext);
  const { schemaText } = allInfo.schemaInfo;
  const { setDogData } = allInfo.dogsInfo;
  const { setVehicleData } = allInfo.vehiclesInfo;

  const handleFileChange = (base64) => {
    document.querySelector(
      "#imageOutput"
    ).style.backgroundImage = `url(${base64})`;

    // all changes handled by _handleImageSave function
    _handleImageSave(schemaText, setDogData, setVehicleData, base64);
  };

  return (
    <div>
      <p>{formFieldData.label}</p>
      {/* Image Input Button */}
      <FileBase64
        multiple={false}
        onDone={({ base64 }) => handleFileChange(base64)}
      />

      {/* Image Output Div */}
      <div className="imagePreview" id={formFieldData.divID}></div>
    </div>
  );
};

export default MyCustomFile;
