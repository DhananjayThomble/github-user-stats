import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./config/firebaseConfig";

// components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import UserContext from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Logout from "./components/Logout";

//init firebase
const fireApp = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(fireApp);

const App = () => {
  const [user, setUser] = useState(null);
  console.log(auth);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
