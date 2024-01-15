"use client";
import { useEffect, useState } from "react";
import { BottomSheet } from "../../common";
import getAddress from "@/services/getAddress";
import { AddressDataI, useAppContext } from "@/context/AppContext";

export default function Address() {
  const { address, setAddress } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<AddressDataI[]>([
    { details: "", id: "", name: "" },
  ]);

  const [selectedOption, setSelectedOption] = useState<AddressDataI>(address);

  const handleRadioChange = (option: AddressDataI) => {
    setSelectedOption(option);
  };
  const onSubmit = () => {
    setAddress(selectedOption);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const result = await getAddress();
      setData(result);
    };
    fetchDataFromApi();
  }, []);

  return (
    <>
      <div className="mt-10">
        <p className="font-semibold text-base">آدرس جهت درج روی بیمه‌نامه</p>
        <div className="mt-2 border-t border-t-gray-300 pt-4">
          {!address.id ? (
            <p className="font-normal text-sm">
              لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
            </p>
          ) : (
            <p className="font-medium text-sm">{address.name}</p>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full py-3 font-semibold text-base mt-9 bg-primary"
      >
        انتخاب از آدرس‌های من
      </button>

      <BottomSheet
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSelectedOption(address);
        }}
        title="انتخاب آدرس"
      >
        <>
          <div className="pb-16">
            {data.map(({ details, id, name }) => (
              <div key={id} className="flex items-center my-4">
                <input
                  type="radio"
                  id={`option-${id}`}
                  name="options"
                  value={id}
                  checked={selectedOption?.id === id}
                  onChange={() => handleRadioChange({ details, id, name })}
                  className="AddressRadio"
                />
                <div className="pr-4">
                  <label
                    htmlFor={`option-${id}`}
                    className="ml-2 font-medium text-sm"
                  >
                    {name}
                  </label>
                  <p className=" font-normal text-sm text-gray-500 mt-2">
                    {details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {isOpen && (
            <div className="w-full bg-white p-3 fixed bottom-0 right-0 max-w-96 left-0 m-auto">
              <button
                type="button"
                className=" w-full py-3 bg-black text-white "
                onClick={onSubmit}
              >
                انتخاب
              </button>
            </div>
          )}
        </>
      </BottomSheet>
    </>
  );
}
