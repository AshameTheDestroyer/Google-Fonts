import React, { HTMLAttributes } from "react";

import { ChildlessComponentProps, ComponentEventProps } from "../../types/ComponentProps";

import "./IconButton.scss";

type IconButtonProps = ChildlessComponentProps & {
    icon: React.ReactElement;
    events?: ComponentEventProps<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>;
};

export default function IconButton(props: IconButtonProps): React.ReactElement {
    return (
        <button
            id={props.id}
            className={["icon-button", props.className].toClassName()}
            children={props.icon}

            {...props.events}
        />
    );
}