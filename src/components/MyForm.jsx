import { useEffect, useContext } from "react";

import { MainContext } from "../Main";

import MyCustomRadio from "./formElements/MyCustomRadio";
import MyCustomSelect from "./formElements/MyCustomSelect";
import MyCustomRange from "./formElements/MyCustomRange";
import MyCustomFile from "./formElements/MyCustomFile";
import MyCustomTextArea from "./formElements/MyCustomTextArea";
import MyDefaultFormElement from "./formElements/MyDefaultFormElement";

// Helper Functions and Constants
import { _initializeData } from "../utils/helpers";

const MyForm = () => {
  // state values/setState functions from MainContext
  const allInfo = useContext(MainContext);
  const { schema, schemaText } = allInfo.schemaInfo;
  const { personData, allPersons, setAllPersons } = allInfo.personsInfo;
  const { dogData, allDogs, setAllDogs } = allInfo.dogsInfo;
  const { vehicleData, allVehicles, setAllVehicles } = allInfo.vehiclesInfo;

  useEffect(() => {
    // Function to initialize the localStorage with some dummy data
    _initializeData(setAllPersons, setAllDogs, setAllVehicles);
  }, []);

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (schemaText === "personSchema") {
      setAllPersons(allPersons.concat(personData));
      localStorage.setItem("allPersons", JSON.stringify(allPersons));
    } else if (schemaText === "dogSchema") {
      setAllDogs(allDogs.concat(dogData));
      localStorage.setItem("allDogs", JSON.stringify(allDogs));
    } else if (schemaText === "vehicleSchema") {
      setAllVehicles(allVehicles.concat(vehicleData));
      localStorage.setItem("allVehicles", JSON.stringify(allVehicles));
    }
    alert("New Data added successfully!");
  };

  return (
    <div>
      {/* Ternary Check to see if schemaText has a value or not */}
      {schemaText === "" ? (
        <p style={{ textAlign: "center" }}>Nothing to show</p>
      ) : (
        // The actual interactable form elements displayed on the screen
        <>
          <form onSubmit={handleFormSubmission}>
            {schema?.fields?.map((element) => {
              // Dynamic check to see what the type is in JSON schema, and rendering components accordingly
              if (element.type === "radio")
                return (
                  <MyCustomRadio key={element.id} formFieldData={element} />
                );
              else if (element.type === "select")
                return (
                  <MyCustomSelect key={element.id} formFieldData={element} />
                );
              else if (element.type === "range")
                return (
                  <MyCustomRange key={element.id} formFieldData={element} />
                );
              else if (element.type === "file")
                return (
                  <MyCustomFile key={element.id} formFieldData={element} />
                );
              else if (element.type === "textarea")
                return (
                  <MyCustomTextArea key={element.id} formFieldData={element} />
                );

              // Simple default component if nothing matches
              return (
                <MyDefaultFormElement
                  key={element.id}
                  formFieldData={element}
                />
              );
            })}
            <br />
            {/* Submit Button */}
            <input className="submitBtn" type="submit" />
          </form>
        </>
      )}
    </div>
  );
};

export default MyForm;
