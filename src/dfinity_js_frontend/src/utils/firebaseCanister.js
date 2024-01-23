import toast from "react-hot-toast";

export const getMyFirebase = async () => {
  try {
    const data = await window.canister.assistant.getFirebaseCredentials();
    const firebase = data;
    return firebase;
  } catch (error) {
    console.log(error);
    toast.error(error.message || error.error.message);
  }
};