import { createContext, useContext, useMemo, useState, useEffect } from "react";

// import useResources from "../hooks/useResources";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  
 
    const store = {
     
    };

  const actions = {
    
  };

    return <AppContext.Provider value={{store, actions}}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;