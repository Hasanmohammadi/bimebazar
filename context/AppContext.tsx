"use client";
import React, { createContext, useState, useContext } from "react";

export interface AddressDataI {
  id: string;
  name: string;
  details: string;
}

interface AddressContextType {
  address: AddressDataI;
  setAddress: (newAddress: AddressDataI) => void;
}

const AppContext = createContext<AddressContextType>({
  address: {
    details: "",
    id: "",
    name: "",
  },
  setAddress: (newAddress: AddressDataI) => {},
});

export const AppProvider = ({ children }: { children: React.ReactElement }) => {
  const [address, setAddress] = useState<AddressDataI>({
    details: "",
    id: "",
    name: "",
  });

  const contextValue: AddressContextType = {
    address,
    setAddress,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
