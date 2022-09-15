// Please see utils/helpers.js for more info
import { _handleImageSave } from "../../utils/helpers";

// Small library to convert image to base64
import FileBase64 from "react-filebase64";

const MyCustomFile = ({
  formFieldData,
  schemaText,
  setDogData,
  setVehicleData,
}) => {
  const handleFileChange = async (base64) => {
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
      <div
        style={{
          width: "350px",
          height: "180px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginTop: "12px",
        }}
        id={formFieldData.divID}
      ></div>
    </div>
  );
};

export default MyCustomFile;
