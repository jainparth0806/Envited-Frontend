import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateEvent from "./Pages/CreateEvent";
import Event from "./Pages/Event";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createevent" element={<CreateEvent />}></Route>
          <Route path="/event" element={<Event />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
