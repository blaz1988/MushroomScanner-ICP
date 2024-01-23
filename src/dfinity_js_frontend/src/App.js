import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch
} from "react-router-dom";
// import "./App.css";
import "./index.css";
import Lens from "./components/Lens";
import Answers from "./components/Answers";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import { Toaster } from "react-hot-toast";


const App = function AppWrapper() {
  return (
    <>
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Lens />}
                />
                <Route
                    path="/answers"
                    element={<Answers />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/donate"
                    element={<Donate />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>
        <Toaster />
    </>
);
};

export default App;
