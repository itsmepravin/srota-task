import { useContext } from "react";
import { MainContext } from "../Main";

import DogTable from "./tables/DogTable";
import VehicleTable from "./tables/VehicleTable";
import PersonTable from "./tables/PersonTable";

import "./MyTable.css";

const MyTable = ({ showTable, setShowTable }) => {
  const allInfo = useContext(MainContext);
  const { schemaText } = allInfo.schemaInfo;

  // Function that checks and renders which schema related component to render
  const renderTable = () => {
    if (schemaText === "personSchema") return <PersonTable />;
    else if (schemaText === "dogSchema") return <DogTable />;
    else if (schemaText === "vehicleSchema") return <VehicleTable />;
  };

  return (
    <div
      id="myTable"
      style={{
        display: `${showTable ? "block" : "none"}`,
      }}
    >
      <div className="flexDiv">
        <div></div>
        <h2>Data</h2>

        {/* Cross Icon */}
        <i
          className="far fa-times-circle"
          onClick={() => setShowTable(false)}
        ></i>
      </div>
      {renderTable()}
    </div>
  );
};

export default MyTable;
