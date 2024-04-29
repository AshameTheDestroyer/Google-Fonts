import { createContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.scss";

import "./constants/Extensions.ts";

import Store from "./Store.ts";
import Home from "./pages/Home/Home";

type MainStateProps = {
    isUsingDarkMode: boolean;
    ToggleDarkMode: () => void;
};

export const MainContext = createContext<MainStateProps | null>(null);

ReactDOM.createRoot(document.querySelector("#root") ?? document.body).render(<Index />);

function Index(): React.ReactElement {
    const [isUsingDarkMode, setIsUsingDarkMode] = useState(true);

    useEffect(() => {
        if (isUsingDarkMode) {
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
        }
    }, [isUsingDarkMode]);

    return (
        <MainContext.Provider value={{
            isUsingDarkMode,
            ToggleDarkMode: () => setIsUsingDarkMode(previousValue => !previousValue),
        }}>
            <Provider store={Store}>
                <HashRouter basename={window.location.pathname || ""}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </HashRouter>
            </Provider>
        </MainContext.Provider>
    );
}