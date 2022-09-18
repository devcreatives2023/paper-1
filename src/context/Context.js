import React from "react";
export const ContextProvider = React.createContext();
const Context = (props) => {
const [model, setModel] =React.useState(false);
  
const openModel = () => {
    return setModel(true);
  };

  const closeModel = () => {
    return setModel(false);
  };

  return (
    <ContextProvider.Provider
    value={{
      model,
      openModel,
      closeModel,
    }}
  >
    {props.children}
  </ContextProvider.Provider>
  );
};

export default Context;
