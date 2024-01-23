import toast from "react-hot-toast";

export const getMyLens = async (link) => {
  try {
    const data = await window.canister.assistant.getLens(link);
    const lens = data
    return lens;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};
