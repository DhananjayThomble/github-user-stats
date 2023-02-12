import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Logout = () => {
  const context = useContext(UserContext);
  context.setUser(null);

  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      toast.success("Log Out Successful");
    })
    .catch((error) => {
      // An error happened.
      console.error(error);
    });

  return <div>Logged Out</div>;
};

export default Logout;
