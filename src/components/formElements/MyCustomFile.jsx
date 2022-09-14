const MyCustomFile = ({ formFieldData }) => {
  const handleFileChange = (e) => {
    const reader = new FileReader();
    // Adding an "onload" event listener, so that after the image is uploaded
    // we select the Image Output Div and set its's background image to the result from the FileReader
    // This is also and async function
    reader.addEventListener("load", () => {
      document.querySelector(
        "#imageOutput"
      ).style.backgroundImage = `url(${reader.result})`;
    });

    // This gets called first
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <p>{formFieldData.label}</p>
      {/* Image Input Button */}
      <input
        type="file"
        id={formFieldData.id}
        accept="image/jpeg, image/png, image/jpg"
        onChange={(event) => handleFileChange(event)}
      />

      {/* Image Output Div */}
      <div
        style={{
          width: "400px",
          height: "300px",
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
