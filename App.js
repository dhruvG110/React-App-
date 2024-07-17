import React from "react";
import "./output.css";
import Home from "./componnets/HomePG/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatNext from "./componnets/What's Next/WhatNext.js";
import About from "./componnets/aboutMe/About.js";
import ContactForm from "./componnets/ContactForm/ContactForm.js";
import ErrorPage from "./componnets/ErrorPage.js";
import SignUP from "./componnets/SignUP/SignUP.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {" "}
          <Route index element={<Home />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/WhatNext" element={<WhatNext />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<ContactForm />}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
          <Route path="/SignUp" element={<SignUP/>}></Route>
        </Routes>

        <div class="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </Router>
    </>
  );
}

export default App;
