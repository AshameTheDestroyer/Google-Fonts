import { SVGProps } from "react";

export function InformationIcon(props: SVGProps<SVGSVGElement>): React.ReactElement {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <g fill="none" stroke="currentColor" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeWidth="2">
                </circle>
                <path strokeWidth="3" d="M12 8h.01v.01H12z">
                </path>
                <path strokeLinecap="round" strokeWidth="2" d="M12 12v4">
                </path>
            </g>
        </svg>
    );
}