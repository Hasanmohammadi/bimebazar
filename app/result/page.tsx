"use client";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function Result() {
  const { infoStatus } = useAppContext();

  const { back } = useRouter();
  return (
    <div>
      {infoStatus === "success" && (
        <p className="font-semibold text-xl">اطلاعات شما با موفقیت ثبت شد.</p>
      )}

      <button
        type="submit"
        className="px-8 py-3 bg-black text-white absolute bottom-8 left-4 "
        onClick={back}
      >
        بازگشت
      </button>
    </div>
  );
}
