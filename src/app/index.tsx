import React from "react";

import Routes from "./routes";

import { Nav } from "../components/Navbar/Nav";
import "./index.css";
import { Footer } from "../components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Routes />
     <Footer/>
    </>
  );
};

export default App;
