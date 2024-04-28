import React from "react";

import IconButton from "../IconButton/IconButton";
import SearchInput from "../SearchInput/SearchInput";
import FONT_PROPERTIES from "../../constants/FontProperties";

import "./Header.scss";
import { SunIcon } from "../Icons/SunIcon";
import { GoogleIcon } from "../Icons/GoogleIcon";
import { ShoppingBagIcon } from "../Icons/ShoppingBagIcon";

export default function Header(): React.ReactElement {
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
                <IconButton icon={<SunIcon />} />
            </div>
        </header>
    );
}