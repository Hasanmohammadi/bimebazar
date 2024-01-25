"use client";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function Result() {
  const { infoStatus } = useAppContext();

  const { back } = useRouter();
  return (
    <div className="flex">
      <div className="m-auto mt-8">
        {infoStatus === "success" && (
          <p className="font-semibold text-xl text-green-600">
            اطلاعات شما با موفقیت ثبت شد.
          </p>
        )}
        {infoStatus === "fail" && (
          <p className="font-semibold text-xl text-red-500">
            مشکلی در فرایند پیش آمده است.
          </p>
        )}
        <button
          type="submit"
          className="px-8 py-3 bg-black text-white absolute bottom-8 left-4 "
          onClick={back}
        >
          بازگشت
        </button>
      </div>
    </div>
  );
}
