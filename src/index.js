// iporteer React
import React from "react";
// importeer React DOM
import ReactDOM from "react-dom/client";
// importeer App
import App from "./App/App";
// variabele aan die we koppelen aan de root
const root = ReactDOM.createRoot(document.getElementById('root'));
// renderen we die variabele 
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)