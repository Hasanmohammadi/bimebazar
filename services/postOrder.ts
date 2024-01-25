import { URLS } from "@/constants/Url";
import axios from "axios";

interface SaveOrderRequest {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

interface PostAddressArgsI {
  order: SaveOrderRequest;
  onSuccess: () => void;
  onFailed: ({ status }: { status: number }) => void;
}

const postAddress = async ({
  order,
  onSuccess,
  onFailed,
}: PostAddressArgsI): Promise<void> => {
  try {
    const response = await axios.post(URLS.POST_ORDER, order, {
      withCredentials: true,
    });

    if (response.status === 200) {
      onSuccess();
    } else {
      onFailed({ status: response.status });
    }
  } catch (error: any) {
    console.error("Error posting data:", error.message);
    throw error;
  }
};

export default postAddress;
