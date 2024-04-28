import React from "react";

import { SearchIcon } from "../Icons/SearchIcon";
import IconButton from "../IconButton/IconButton";
import { ChildlessComponentProps } from "../../types/ComponentProps";

import "./SearchInput.scss";

type SearchInputProps = ChildlessComponentProps & {
    placeholder?: string;
    orderByCategories: Array<string>;
};

export default function SearchInput(props: SearchInputProps): React.ReactElement {
    return (
        <div id={props.id} className={["search-input", props.className].toClassName()}>
            <IconButton icon={<SearchIcon />} />
            <input
                id={props.id + "-term-input"}

                name="term"
                type="search"
                placeholder={props.placeholder}
            />
            <select id={props.id + "-order-by-input"} name="order-by"> {
                props.orderByCategories.map((category, i) =>
                    <option key={i} value={category}>
                        {category.toTitleCase()}
                    </option>
                )
            } </select>
        </div>
    );
}