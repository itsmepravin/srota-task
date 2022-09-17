// All three JSON schemas are imported here and
// this component is responsible for dynamically changing schema value to responding JSON schema
// which in turn changes what the user sees

import personSchema from "../schema/personSchema.json";
import dogSchema from "../schema/dogSchema.json";
import vehicleSchema from "../schema/vehicleSchema.json";

import { MainContext } from "../Main";
import { useContext } from "react";

const SelectSchema = () => {
  // Getting the state values from the global state object inside MainContext
  const allInfo = useContext(MainContext);
  const { setSchema, setSchemaText } = allInfo.schemaInfo;

  // function responsible for handling the aftermath of change of radiobutton value
  const handleSchemaChange = (e) => {
    if (e.target.value === "personSchema") {
      setSchema(personSchema);
      setSchemaText("personSchema");
    } else if (e.target.value === "dogSchema") {
      setSchema(dogSchema);
      setSchemaText("dogSchema");
    } else if (e.target.value === "vehicleSchema") {
      setSchema(vehicleSchema);
      setSchemaText("vehicleSchema");
    }
  };

  return (
    <div className="selectSchemaContainer">
      <p>
        <strong>Please select a schema : </strong>
      </p>
      <input
        type="radio"
        id="people"
        name="schema"
        value="personSchema"
        onClick={(event) => handleSchemaChange(event)}
      />

      <label htmlFor="people">Persons</label>
      <input
        type="radio"
        id="dogs"
        name="schema"
        value="dogSchema"
        onClick={(event) => handleSchemaChange(event)}
      />

      <label htmlFor="dogs">Dogs</label>
      <input
        type="radio"
        id="vehicle"
        name="schema"
        value="vehicleSchema"
        onClick={(event) => handleSchemaChange(event)}
      />
      <label htmlFor="vehicle">Vehicles</label>
    </div>
  );
};

export default SelectSchema;
