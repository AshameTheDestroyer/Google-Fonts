import React from "react";

import { ComponentProps } from "../../types/ComponentProps";

import "./Page.scss";

type PageProps = WithRequired<ComponentProps, "id">;

export default function Page(props: PageProps): React.ReactElement {
    return <main {...props} className={["page", props.className].toClassName()} />;
}