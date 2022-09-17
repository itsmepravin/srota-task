import { useState, useEffect, useContext } from "react";
import { MainContext } from "../Main";

const MyIcon = ({ setShowTable }) => {
  const allInfo = useContext(MainContext);
  const { schemaText } = allInfo.schemaInfo;

  // State to change the className to respective Font Awesome Class
  const [iconClassName, setIconClassName] = useState("");

  // Put schemaText as useEffect dependency, so that the icon changes
  // depending on the schema
  useEffect(() => {
    document.getElementById("myIcon").style.display = "block";
    // Check to change the classNames dynamically
    if (schemaText === "personSchema") setIconClassName("fas fa-user-tie");
    else if (schemaText === "dogSchema") setIconClassName("fas fa-paw");
    else if (schemaText === "vehicleSchema") setIconClassName("fas fa-car");
    else document.getElementById("myIcon").style.display = "none";
  }, [schemaText]);

  return (
    <i
      id="myIcon"
      className={iconClassName}
      onClick={() => setShowTable(true)}
    ></i>
  );
};

export default MyIcon;
