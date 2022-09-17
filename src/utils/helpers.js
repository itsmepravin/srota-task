import { useState } from "react";

import dummyPersons from "../data/initialPersonData.json";
import dummyDogs from "../data/initialDogData.json";
import dummyVehicles from "../data/initialVechicleData.json";

import personSchema from "../schema/personSchema.json";
import dogsSchema from "../schema/dogSchema.json";
import vehicleSchema from "../schema/vehicleSchema.json";

// Getting all the IDs of form fields
const allPersonFieldsID = personSchema.fields.map((element) => element.id);
const allDogFieldsID = dogsSchema.fields.map((element) => element.id);
const allVehicleFieldsID = vehicleSchema.fields.map((element) => element.id);

// Creating an initial object with all keys values set to ""
export const personDetails = Object.fromEntries(
  allPersonFieldsID.map((id) => [id, ""])
);
export const dogDetails = Object.fromEntries(
  allDogFieldsID.map((id) => [id, ""])
);
export const vehicleDetails = Object.fromEntries(
  allVehicleFieldsID.map((id) => [id, ""])
);

// Function responsible for handling all user entries in form,
// checking which singular data object needs to be filled with user input,
// then updating only that particular value inside the object
export const handleInputValues = (
  e,
  schemaText,
  setPersonData,
  setDogData,
  setVehicleData
) => {
  // Check to see which schema the user is currently at,
  // and update particular state accordingly
  if (schemaText === "personSchema") {
    setPersonData((previousValues) => ({
      ...previousValues,
      [e.target.id]: e.target.value,
    }));
  } else if (schemaText === "dogSchema") {
    setDogData((previousValues) => ({
      ...previousValues,
      [e.target.id]: e.target.value,
    }));
  } else if (schemaText === "vehicleSchema") {
    setVehicleData((previousValues) => ({
      ...previousValues,
      [e.target.id]: e.target.value,
    }));
  }
};

// Only used by <MyCustomFile /> Component
// Does the same thing as handleInputValues function but for images
export const _handleImageSave = (
  schemaText,
  setDogData,
  setVehicleData,
  result
) => {
  if (schemaText === "dogSchema") {
    setDogData((previousValues) => ({
      ...previousValues,
      dogImage: result,
    }));
  } else if (schemaText === "vehicleSchema") {
    setVehicleData((previousValues) => ({
      ...previousValues,
      vehicleImage: result,
    }));
  }
};

// Initializing application with dummy data,
// then updating the localStorage and the state
export const _initializeData = (setAllPersons, setAllDogs, setAllVehicles) => {
  localStorage.setItem("allPersons", JSON.stringify(dummyPersons));
  setAllPersons(JSON.parse(localStorage.getItem("allPersons")));
  localStorage.setItem("allDogs", JSON.stringify(dummyDogs));
  setAllDogs(JSON.parse(localStorage.getItem("allDogs")));
  localStorage.setItem("allVehicles", JSON.stringify(dummyVehicles));
  setAllVehicles(JSON.parse(localStorage.getItem("allVehicles")));
};

// Even though it looks it's a Component,
// I use it as an normal function, to return the global state objext called allInfo here,
// because useState cannot be called outside of React Component.
// This function puts all the state and their setState functions in one place
export const ContextFunc = () => {
  // Current schema and current schemaText state
  const [schema, setSchema] = useState(null);
  const [schemaText, setSchemaText] = useState("");

  // Single data
  const [personData, setPersonData] = useState(personDetails);
  const [dogData, setDogData] = useState(dogDetails);
  const [vehicleData, setVehicleData] = useState(vehicleDetails);

  // Collections of all respective schemas
  const [allPersons, setAllPersons] = useState([]);
  const [allDogs, setAllDogs] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);

  const allInfo = {
    schemaInfo: {
      schema,
      setSchema,
      schemaText,
      setSchemaText,
    },
    personsInfo: {
      personData,
      setPersonData,
      allPersons,
      setAllPersons,
    },
    dogsInfo: {
      dogData,
      setDogData,
      allDogs,
      setAllDogs,
    },
    vehiclesInfo: {
      vehicleData,
      setVehicleData,
      allVehicles,
      setAllVehicles,
    },
  };
  return allInfo;
};
