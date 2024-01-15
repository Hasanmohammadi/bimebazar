const getAddress = async () => {
  try {
    const response = await fetch(
      "https://front-end-task.bmbzr.ir/my-addresses"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export default getAddress;
