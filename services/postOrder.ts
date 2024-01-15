import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface SaveOrderRequest {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

const postAddress = async (
  order: SaveOrderRequest,
  router: AppRouterInstance,
  setInfoStatus: (infoStatus: "fail" | "success" | null) => void
): Promise<void> => {
  try {
    const response = await fetch(
      "https://front-end-task.bmbzr.ir/order/completion/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );

    if (response.ok) {
      setInfoStatus("success");
      router.push("/result");
    } else {
      setInfoStatus("fail");
      alert(`Has error ${response.status}`);
    }
  } catch (error: any) {
    console.error("Error posting data:", error.message);
    throw error;
  }
};

export default postAddress;
