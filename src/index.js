import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

// React-Router
import { BrowserRouter } from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);