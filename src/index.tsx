import { createContext } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import "./constants/Extensions.ts";

import Store from "./Store.ts";
import Home from "./pages/Home/Home";

type MainStateProps = {};
export const MainContext = createContext<MainStateProps | null>(null);

ReactDOM.createRoot(document.querySelector("#root") ?? document.body).render(
    <Provider store={Store}>
        <HashRouter basename={window.location.pathname || ""}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </HashRouter>
    </Provider>
);