import React from "react";

import { ChildlessComponentProps } from "../../types/ComponentProps";

import "./IconButton.scss";

type IconButtonProps = ChildlessComponentProps & {
    icon: React.ReactElement;
};

export default function IconButton(props: IconButtonProps): React.ReactElement {
    return (
        <button
            id={props.id}
            className={["icon-button", props.className].toClassName()}
            children={props.icon}
        />
    );
}