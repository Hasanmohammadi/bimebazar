"use client";
import { Input } from "./components/common";
import { Address } from "./components/pages/information";

import validationNationalCode from "@/validation/nationalId";
import validationPhoneNumber from "@/validation/phoneNumber";

import { SetStateAction, useState } from "react";

export default function Home() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState({ nationalId: false, phoneNumber: false });

  const handleInputChange = (
    event: { target: { value: any } },
    setInput: {
      (value: SetStateAction<string>): void;
      (value: SetStateAction<string>): void;
    }
  ) => {
    setInput(event.target.value);
  };

  const onSubmit = () => {
    if (!validationNationalCode(input1)) {
      setError((pre) => ({ ...pre, nationalId: true }));
    } else {
      setError((pre) => ({ ...pre, nationalId: false }));
    }
    if (!validationPhoneNumber(input2)) {
      setError((pre) => ({ ...pre, phoneNumber: true }));
    } else {
      setError((pre) => ({ ...pre, phoneNumber: false }));
    }
  };

  return (
    <main className="w-full max-w-md h-screen">
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
            onChange={(e) => handleInputChange(e, setInput1)}
            value={input1}
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
            onChange={(e) => handleInputChange(e, setInput2)}
            value={input2}
          />
          {error.phoneNumber && (
            <span className="text-red-500">
              شماره تلفن همراه وارد شده معتبر نیست
            </span>
          )}
        </div>
        <Address />
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
