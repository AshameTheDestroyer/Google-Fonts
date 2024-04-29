import React, { useContext } from "react";

import { MainContext } from "../..";
import IconButton from "../IconButton/IconButton";
import SearchInput from "../SearchInput/SearchInput";
import FONT_PROPERTIES from "../../constants/FontProperties";

import "./Header.scss";
import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";
import { GoogleIcon } from "../Icons/GoogleIcon";
import { ShoppingBagIcon } from "../Icons/ShoppingBagIcon";

export default function Header(): React.ReactElement {
    const MainState = useContext(MainContext);

    return (
        <header id="main-header">
            <div id="logo">
                <GoogleIcon />
                <h1>oogle Fonts</h1>
            </div>
            <SearchInput
                placeholder="Search fonts..."
                orderByCategories={Object.keys(FONT_PROPERTIES)}
            />
            <div className="button-displayer">
                <IconButton icon={<ShoppingBagIcon />} />
                <IconButton icon={MainState?.isUsingDarkMode ? <SunIcon /> : <MoonIcon />} events={{
                    onClick: _e => MainState?.ToggleDarkMode(),
                }} />
            </div>
        </header>
    );
}