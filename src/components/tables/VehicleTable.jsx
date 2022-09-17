import vehicleSchema from "../../schema/vehicleSchema.json";

import { useContext } from "react";
import { MainContext } from "../../Main";

const VehicleTable = () => {
  const allInfo = useContext(MainContext);
  const { allVehicles } = allInfo.vehiclesInfo;
  // Getting all the table headings
  const vehiclesHeadings = vehicleSchema.fields.map(
    (element) => element.tableName
  );
  return (
    <table style={{ textAlign: "center" }}>
      <thead>
        {vehiclesHeadings.map((element) => (
          <td>{element}</td>
        ))}
      </thead>
      {allVehicles.map((element) => (
        <tbody>
          <tr>
            <td>{element.brand}</td>
            <td>{element.model}</td>
            <td>{element.totalDistanceCovered}</td>
            <td>{element.carDescription}</td>
            <td>
              <img src={element.vehicleImage} width={180} height={120} alt="" />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default VehicleTable;
