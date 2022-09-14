import { useState } from "react";

import SelectSchema from "./SelectSchema";

import MyCustomRadio from "./formElements/MyCustomRadio";
import MyCustomSelect from "./formElements/MyCustomSelect";
import MyCustomRange from "./formElements/MyCustomRange";
import MyCustomFile from "./formElements/MyCustomFile";
import MyCustomTextArea from "./formElements/MyCustomTextArea";
import MyDefaultFormElement from "./formElements/MyDefaultFormElement";

const MyForm = () => {
  const [schema, setSchema] = useState(null); // handled by SelectSchema component through radio buttons
  const [schemaText, setSchemaText] = useState(""); // helper state

  return (
    <div>
      {/* Select one of three Schemas from this component */}
      <SelectSchema setSchema={setSchema} setSchemaText={setSchemaText} />

      {/* Ternary Check to see if schemaText has a value or not */}
      {schemaText === "" ? (
        <p style={{ textAlign: "center" }}>Nothing to show</p>
      ) : (
        // The actual interactable form elements displayed on the screen
        <form>
          {schema?.fields?.map((element) => {
            // Dynamic check to see what the type is in JSON schema, and rendering components accordingly
            if (element.type === "radio")
              return <MyCustomRadio formFieldData={element} />;
            else if (element.type === "select")
              return <MyCustomSelect formFieldData={element} />;
            else if (element.type === "range")
              return <MyCustomRange formFieldData={element} />;
            else if (element.type === "file")
              return <MyCustomFile formFieldData={element} />;
            else if (element.type === "textarea")
              return <MyCustomTextArea formFieldData={element} />;
            // Simple default component if nothing matches
            return <MyDefaultFormElement formFieldData={element} />;
          })}
        </form>
      )}
    </div>
  );
};

export default MyForm;
