import { URLS } from "@/constants/Url";
import axios from "axios";

const getMyAddresses = async () => {
  const requestOptions = {
    method: "GET",
    withCredentials: true,
    redirect: "follow",
  };

  try {
    const response = await axios.get(URLS.GET_ADDRESS, requestOptions);
    return response.data;
  } catch (error) {
    console.error("Error getting addresses:", error);
    throw error;
  }
};

export default getMyAddresses;
