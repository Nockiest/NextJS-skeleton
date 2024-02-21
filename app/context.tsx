'use client'
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

type GlobalContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;

};




export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>("");



  let globalContextValue = {
    query,
    setQuery,

  };




  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useQuery must be used within a GlobalContextProvider");
  }

  return context;
};