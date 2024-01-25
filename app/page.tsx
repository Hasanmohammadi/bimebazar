"use client";
import saveOrderInformation from "@/services/postOrder";
import { Input } from "./components/common";
import { Address } from "./components/pages/information";

import validationNationalCode from "@/validation/nationalId";
import validationPhoneNumber from "@/validation/phoneNumber";

import { useAppContext } from "@/context/AppContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const {
    address,
    nationalId,
    phoneNumber,
    setNationalId,
    setPhoneNumber,
    setInfoStatus,
  } = useAppContext();

  const [error, setError] = useState({
    nationalId: false,
    phoneNumber: false,
    addressId: false,
  });

  const router = useRouter();
  const handleInputChange = (
    event: { target: { value: any } },
    setInput: {
      (nationalId: string): void;
      (phoneNumber: string): void;
    }
  ) => {
    setInput(event.target.value);
  };

  const post = async () => {
    if (!error.nationalId && !error.phoneNumber && !error.addressId) {
      try {
        await saveOrderInformation({
          order: {
            addressId: address.id,
            nationalId,
            phoneNumber,
          },
          onSuccess: () => {
            router.push("/result");
            setInfoStatus("success");
          },
          onFailed: ({ status }) => {
            setInfoStatus("fail");
            alert(`Has error ${status}`);
          },
        });
      } catch (error: any) {
        console.error("Error posting address:", error.message);
      }
    }
  };

  const validateAndSetError = (
    field: string,
    value: string,
    validationFunction: (value: string) => boolean
  ) => {
    setError((prevErrors) => ({
      ...prevErrors,
      [field]: !validationFunction(value),
    }));
  };

  const onSubmit = async () => {
    validateAndSetError("nationalId", nationalId, validationNationalCode);
    validateAndSetError("phoneNumber", phoneNumber, validationPhoneNumber);
    validateAndSetError("addressId", address.id, () => !!address.id);

    post();
  };

  return (
    <main className="w-full max-w-md h-screen m-auto -z-0">
      <div className="mt-8 px-5">
        <p className="font-normal text-base">
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
        </p>
        <div className="mt-2 border-t border-t-gray-300 pt-4">
          <Input
            className={
              error.nationalId
                ? "border border-red-500 w-full p-3"
                : "border-gray-400 border w-full p-3"
            }
            placeholder="کد ملی"
            type="number"
            name="nationalId"
            onChange={(e) => handleInputChange(e, setNationalId)}
            value={nationalId}
          />
          {error.nationalId && (
            <span className="text-red-500">کدملی وارد شده معتبر نیست</span>
          )}
          <Input
            className={
              error.phoneNumber
                ? "border border-red-500 w-full p-3 mt-4"
                : "border-gray-400 border w-full p-3 mt-4"
            }
            placeholder="شماره تلفن همراه"
            type="number"
            name="phoneNumber"
            onChange={(e) => handleInputChange(e, setPhoneNumber)}
            value={phoneNumber}
          />
          {error.phoneNumber && (
            <span className="text-red-500">
              شماره تلفن همراه وارد شده معتبر نیست
            </span>
          )}
        </div>
        <Address />
        {error.addressId && (
          <span className="text-red-500">لطفا آدرس را انتخاب کنید</span>
        )}
        <button
          type="submit"
          className="px-8 py-3 bg-black text-white absolute bottom-8 left-4 "
          onClick={onSubmit}
        >
          تایید و ادامه
        </button>
      </div>
    </main>
  );
}
