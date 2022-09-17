import personSchema from "../../schema/personSchema.json";

import { useContext } from "react";
import { MainContext } from "../../Main";

import "./tables.css";

const PersonTable = () => {
  const allInfo = useContext(MainContext);
  const { allPersons } = allInfo.personsInfo;
  // Getting all the table headings
  const personHeadings = personSchema.fields.map(
    (element) => element.tableName
  );
  return (
    <table>
      <thead>
        <tr>
          {personHeadings.map((element) => (
            <td key={element}>{element}</td>
          ))}
        </tr>
      </thead>
      {allPersons.map((element) => (
        <tr key={element.fName}>
          <td>{element.fName}</td>
          <td>{element.lName}</td>
          <td>{element.age}</td>
          <td>{element.dateOfBirth}</td>
          <td>{element.race}</td>
          <td>{element.educationLevel}</td>
          <td>{element.salary}</td>
          <td>{element.aboutYourself}</td>
        </tr>
      ))}
    </table>
  );
};

export default PersonTable;
