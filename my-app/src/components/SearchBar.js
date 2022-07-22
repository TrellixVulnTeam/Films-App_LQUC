import React from "react";

export default function SearchBar(props) {
  return (
    <div className="col col-3">
      <input
        type="text"
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search..."
      ></input>
    </div>
  );
}
