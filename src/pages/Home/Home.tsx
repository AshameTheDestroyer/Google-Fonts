import React from "react";

import Page from "../../components/Page/Page";
import FONT_DATA from "../../constants/FontData";
import Header from "../../components/Header/Header";
import FontDisplayer from "../../components/FontDisplayer/FontDisplayer";

import "./Home.scss";

export default function Home(): React.ReactElement {
    return (
        <Page id="home-page">
            <Header />
            <FontDisplayer fonts={FONT_DATA} />
        </Page>
    );
}