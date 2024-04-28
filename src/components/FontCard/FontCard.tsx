import React from "react";

import Marquee from "../Marquee/Marquee";
import FONT_SLOGAN from "../../constants/FontSlogan";
import RatingDisplayer from "../RatingDisplayer/RatingDisplayer";

import "./FontCard.scss";

type FontCardProps = Font;

export default function FontCard(props: FontCardProps): React.ReactElement {
    return (
        <div className="font-card" style={{
            "--font-family": props.family,
        } as React.CSSProperties}>
            <header>
                <h3>{props.family}</h3>
                <small>{props.author}</small>
                <RatingDisplayer rating={props.rating} />
            </header>
            <Marquee speedInMilliseconds={50000}>{FONT_SLOGAN}</Marquee>
        </div>
    );
}