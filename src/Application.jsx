import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import { Appcontext, ContextProvider } from "./context/context";
import { auth } from "./firebase";
const Application = () => {
  const { userLoginOrLogout, user } = useContext(Appcontext);
  useEffect(() => {
    const sunbscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // doo something about
        userLoginOrLogout(authUser);
      } else {
        userLoginOrLogout(authUser);
      }
    });

    return () => {
      sunbscribe();
    };
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
