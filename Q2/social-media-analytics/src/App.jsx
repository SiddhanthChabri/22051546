import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AppRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
};

export default App;
