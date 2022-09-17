import dogSchema from "../../schema/dogSchema.json";

import { useContext } from "react";
import { MainContext } from "../../Main";

const DogTable = () => {
  const allInfo = useContext(MainContext);
  const { allDogs } = allInfo.dogsInfo;
  // Getting all the table headings
  const dogHeadings = dogSchema.fields.map((element) => element.tableName);
  return (
    <table style={{ textAlign: "center" }}>
      <thead>
        {dogHeadings.map((element) => (
          <td>{element}</td>
        ))}
      </thead>
      {allDogs.map((element) => (
        <tbody>
          <tr>
            <td>{element.name}</td>
            <td>{element.age}</td>
            <td>{element.togetherFrom}</td>
            <td>{element.gender}</td>
            <td>{element.breed}</td>
            <td>
              <img src={element.dogImage} width={180} height={120} alt="" />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default DogTable;
