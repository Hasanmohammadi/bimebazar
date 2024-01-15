"use client";
import React, { createContext, useState, useContext } from "react";

export interface AddressDataI {
  id: string;
  name: string;
  details: string;
}

interface AddressContextType {
  address: AddressDataI;
  setAddress: (address: AddressDataI) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  nationalId: string;
  setNationalId: (nationalId: string) => void;
  infoStatus: "fail" | "success" | null;
  setInfoStatus: (infoStatus: "fail" | "success" | null) => void;
}

const AppContext = createContext<AddressContextType>({
  address: {
    details: "",
    id: "",
    name: "",
  },
  setAddress: (newAddress: AddressDataI) => {},
  phoneNumber: "",
  setPhoneNumber: (phoneNumber: string) => {},
  nationalId: "",
  setNationalId: (nationalId: string) => {},
  infoStatus: null,
  setInfoStatus: (infoStatus: "fail" | "success" | null) => {},
});

export const AppProvider = ({ children }: { children: React.ReactElement }) => {
  const [address, setAddress] = useState<AddressDataI>({
    details: "",
    id: "",
    name: "",
  });

  const [nationalId, setNationalId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [infoStatus, setInfoStatus] = useState<"fail" | "success" | null>(null);

  const contextValue: AddressContextType = {
    address,
    setAddress,
    phoneNumber,
    setPhoneNumber,
    nationalId,
    setNationalId,
    infoStatus,
    setInfoStatus,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
