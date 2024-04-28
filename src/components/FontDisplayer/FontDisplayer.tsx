import React from "react";

import FontCard from "../FontCard/FontCard";

import "./FontDisplayer.scss";
import { InformationIcon } from "../Icons/InformationIcon";
import IconButton from "../IconButton/IconButton";

const FONTS_PER_PAGE: number = 5;

type FontDisplayerProps = {
    fonts: Array<Font>;
};

export default function FontDisplayer(props: FontDisplayerProps): React.ReactElement {
    const queryStrings: Record<string, Primitive> =
        location.search.replace("?", "")
            .split("&")
            .reduce((accumulator, query) => (
                { ...accumulator, [query.split("=")[0]]: query.split("=")[1] }
            ), {});

    const page: number = Number(queryStrings["page"] ?? "1");
    const pageFrom: number = (page - 1) * FONTS_PER_PAGE + 1;
    const pageTo: number = page * FONTS_PER_PAGE;

    return (
        <main id="font-displayer">
            <header>
                <p>Showing {FONTS_PER_PAGE} of {props.fonts.length} fonts</p>
                <p>From the {pageFrom.toNth()} font up to the {pageTo.toNth()}</p>
                <p>About these fonts <IconButton icon={<InformationIcon />} /></p>
            </header>

            <main> {
                props.fonts
                    .slice(pageFrom - 1, pageTo)
                    .map((font, i) =>
                        <FontCard key={i} {...font} />
                    )
            } </main>

            <footer> {
                new Array(Math.ceil(props.fonts.length / FONTS_PER_PAGE))
                    .fill(null)
                    .map((_, i) =>
                        <a key={i} className="icon-button" href={`./?page=${i + 1}`}>{i + 1}</a>
                    )
            } </footer>
        </main>
    );
}