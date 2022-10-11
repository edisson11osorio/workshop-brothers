import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Principal from "./Principal"

const rootElement = document.getElementById("root")

const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <Principal/>
)