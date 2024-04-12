import { ChangeEvent } from "react";

export type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onchangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}