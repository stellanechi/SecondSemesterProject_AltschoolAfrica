// CUSTOM HOOK FOR GETTING THE LOGGED IN USER

import { useEffect, useState } from "react";
import { EMAIL_LOCAL_STORAGE_KEY } from "../config";

const useAuthentication = () => {
  const [email, setEmail] = useState();

  useEffect(() => {
    const email = localStorage.getItem(EMAIL_LOCAL_STORAGE_KEY);
    setEmail(email);
  }, []);

  return { email };
};

export default useAuthentication;
