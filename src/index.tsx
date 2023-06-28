import React from "react";
import ReactDOM from "react-dom/client";
import PlacesContent from "./App";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode> 
    <link rel="stylesheet" href="styles.css"></link>
    <Header />
    <PlacesContent />
    <Footer />
  </React.StrictMode>
);
