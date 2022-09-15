import DogTable from "./tables/DogTable";
import VehicleTable from "./tables/VehicleTable";
import PersonTable from "./tables/PersonTable";

const MyTable = ({ schemaText, allPersons, allDogs, allVehicles }) => {
  // Function that checks and renders which schema related component to render
  const renderTable = () => {
    if (schemaText === "personSchema")
      return <PersonTable allPersons={allPersons} />;
    else if (schemaText === "dogSchema") return <DogTable allDogs={allDogs} />;
    else if (schemaText === "vehicleSchema")
      return <VehicleTable allVehicles={allVehicles} />;
  };

  return (
    <div id="myTable" style={{ display: "hidden" }}>
      <h2 style={{ textAlign: "center" }}>Data</h2>
      {renderTable()}
    </div>
  );
};

export default MyTable;
