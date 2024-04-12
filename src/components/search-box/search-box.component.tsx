import { SearchBoxProps } from "../../types/SearchBoxProps.type"

import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onchangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onchangeHandler}
  />
);

export default SearchBox;
