import { Input } from "./components/common";

export default function Home() {
  return (
    <main className="w-full">
      <div className="mt-8 px-5">
        <p className="font-normal text-base">
          لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
        </p>
        <div className="mt-2 border-t border-t-gray-300 pt-4">
          <Input
            className="border-gray-400 border w-full p-3"
            placeholder="کد ملی"
            type="number"
          />
          <Input
            className="border-gray-400 border w-full p-3 mt-6"
            placeholder="شماره تلفن همراه"
            type="number"
          />
        </div>
        <div className="mt-10">
          <p className="font-semibold text-base">آدرس جهت درج روی بیمه‌نامه</p>
          <div className="mt-2 border-t border-t-gray-300 pt-4">
            <p className="font-normal text-sm">
              لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
            </p>
          </div>
        </div>
        <button className="w-full py-3 font-semibold text-base mt-9 bg-primary">
          انتخاب از آدرس‌های من
        </button>
      </div>
    </main>
  );
}
