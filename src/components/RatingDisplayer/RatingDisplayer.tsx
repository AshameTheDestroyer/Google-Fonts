import React from "react";

import { StarIcon } from "../Icons/StarIcon";

import "./RatingDisplayer.scss";

export const MAXIMUM_RATING: number = 5;

type RatingDisplayerProps = {
    rating: number;
};

export default function RatingDisplayer(props: RatingDisplayerProps): React.ReactElement {
    return (
        <span className="rating-displayer" title={`Rated ${props.rating} out of ${MAXIMUM_RATING}.`}>
            <StarIcons rating={MAXIMUM_RATING} />
            <StarIcons rating={props.rating} />
        </span>
    );
}

function StarIcons(props: RatingDisplayerProps): React.ReactElement {
    return (
        <span> {
            new Array(props.rating)
                .fill(null)
                .map((_, i) =>
                    <StarIcon key={i} />
                )
        } </span>
    );
}