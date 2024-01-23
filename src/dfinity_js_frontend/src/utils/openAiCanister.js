import toast from "react-hot-toast";

export const getMyOpenAi = async () => {
  try {
    const data = await window.canister.assistant.getOpenAiCredentials();
    const openai = data;
    return openai;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};