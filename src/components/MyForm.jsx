import { useState, useEffect } from "react";

import SelectSchema from "./SelectSchema";

import MyCustomRadio from "./formElements/MyCustomRadio";
import MyCustomSelect from "./formElements/MyCustomSelect";
import MyCustomRange from "./formElements/MyCustomRange";
import MyCustomFile from "./formElements/MyCustomFile";
import MyCustomTextArea from "./formElements/MyCustomTextArea";
import MyDefaultFormElement from "./formElements/MyDefaultFormElement";

// Component responsible for displayiny all data
import MyTable from "./MyTable";

// Helper Functions and Constants
import {
  personDetails,
  dogDetails,
  vehicleDetails,
  _initializeData,
} from "../utils/helpers";

const MyForm = () => {
  const [schema, setSchema] = useState(null); // handled by SelectSchema component through radio buttons
  const [schemaText, setSchemaText] = useState(""); // helper state

  // State that deals with only singular/one instance of data
  const [personData, setPersonData] = useState(personDetails);
  const [dogData, setDogData] = useState(dogDetails);
  const [vehicleData, setVehicleData] = useState(vehicleDetails);

  // State that deals with multiple or collections of data
  const [allPersons, setAllPersons] = useState([]);
  const [allDogs, setAllDogs] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);

  // Function that gets invoked after submit button is pressed
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check to see what the current schema is
    // and adding data to the localStorage data object and the multiple state objects
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

    // Clearing all the fields after submission
    setPersonData(personDetails);
    setDogData(dogDetails);
    setVehicleData(vehicleDetails);
  };

  useEffect(() => {
    // Function to initialize the localStorage with some dummy data
    _initializeData(setAllPersons, setAllDogs, setAllVehicles);
  }, []);

  return (
    <div>
      {/* Select one of three Schemas from this component */}
      <SelectSchema setSchema={setSchema} setSchemaText={setSchemaText} />

      {/* Ternary Check to see if schemaText has a value or not */}

      {schemaText === "" ? (
        <p style={{ textAlign: "center" }}>Nothing to show</p>
      ) : (
        // The actual interactable form elements displayed on the screen
        <>
          <form onSubmit={handleFormSubmit}>
            {schema?.fields?.map((element) => {
              // Dynamic check to see what the type is in JSON schema, and rendering components accordingly
              if (element.type === "radio")
                return (
                  <MyCustomRadio
                    key={element.id}
                    formFieldData={element}
                    schemaText={schemaText}
                    setPersonData={setPersonData}
                    setDogData={setDogData}
                    setVehicleData={setVehicleData}
                  />
                );
              else if (element.type === "select")
                return (
                  <MyCustomSelect
                    key={element.id}
                    formFieldData={element}
                    schemaText={schemaText}
                    setPersonData={setPersonData}
                    setDogData={setDogData}
                    setVehicleData={setVehicleData}
                  />
                );
              else if (element.type === "range")
                return (
                  <MyCustomRange
                    key={element.id}
                    formFieldData={element}
                    schemaText={schemaText}
                    setPersonData={setPersonData}
                    setDogData={setDogData}
                    setVehicleData={setVehicleData}
                  />
                );
              else if (element.type === "file")
                return (
                  <MyCustomFile
                    key={element.id}
                    formFieldData={element}
                    schemaText={schemaText}
                    setDogData={setDogData}
                    setVehicleData={setVehicleData}
                  />
                );
              else if (element.type === "textarea")
                return (
                  <MyCustomTextArea
                    key={element.id}
                    formFieldData={element}
                    schemaText={schemaText}
                    setPersonData={setPersonData}
                    setDogData={setDogData}
                    setVehicleData={setVehicleData}
                  />
                );

              // Simple default component if nothing matches
              return (
                <MyDefaultFormElement
                  key={element.id}
                  formFieldData={element}
                  setPersonData={setPersonData}
                  setDogData={setDogData}
                  setVehicleData={setVehicleData}
                  schemaText={schemaText}
                />
              );
            })}
            <br />
            <input type="submit" />
          </form>
        </>
      )}

      {/* Data Rendering Component */}
      <MyTable
        schemaText={schemaText}
        allPersons={allPersons}
        allDogs={allDogs}
        allVehicles={allVehicles}
      />
    </div>
  );
};

export default MyForm;
