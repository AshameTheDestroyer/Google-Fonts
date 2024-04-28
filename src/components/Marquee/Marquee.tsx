import React from "react";

import { ComponentProps } from "../../types/ComponentProps";

import "./Marquee.scss";

type MarqueeProps = ComponentProps & {
    speedInMilliseconds?: number;
};

export default function Marquee(props: MarqueeProps): React.ReactElement {
    return (
        <div
            id={props.id}
            className={["marquee", props.className].toClassName()}
            style={{
                "--speed": props.speedInMilliseconds + "ms",
            } as React.CSSProperties}
        >
            <span>{props.children}</span>
            <span aria-hidden>{props.children}</span>
        </div>
    );
}