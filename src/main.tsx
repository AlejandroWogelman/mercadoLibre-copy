import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";


import App from "./app";

ReactDOM.render(
  <>
    
    <BrowserRouter>
     {/*  <ChakraProvider theme={theme}> */}
        <App />
     {/*  </ChakraProvider> */}
    </BrowserRouter>
  </>,
  document.getElementById("root"),
);
