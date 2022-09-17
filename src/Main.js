import { createContext, useState } from "react";
import MyForm from "./components/MyForm";
import MyTable from "./components/MyTable";
import SelectSchema from "./components/SelectSchema";
import MyIcon from "./icon/MyIcon";

// Please see utils/helpers.js
import { ContextFunc } from "./utils/helpers";

// The main context object that contains all the state and setState functions
export const MainContext = createContext();

const Main = () => {
  // State that controls the displaying of table
  const [showTable, setShowTable] = useState(false);

  return (
    // Providing all the children components the global state object to use
    <MainContext.Provider value={ContextFunc()}>
      <div className="mainContainer">
        <SelectSchema />
        <MyForm />
      </div>
      <MyTable showTable={showTable} setShowTable={setShowTable} />
      <MyIcon setShowTable={setShowTable} />
    </MainContext.Provider>
  );
};

export default Main;
