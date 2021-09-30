import React, { useState } from "react";
import Select from "./Select";

export default function Forms(props) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState("");
  const [url, setUrl] = useState("");
  const imageSize = ["All", "small", "medium", "large", "xlarge", "xxlarge"];

  const options = imageSize.map(name => (
    <option key={name} value={name}>
      {name}
    </option>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    let url = `${props.url}${query.length !== 0 ? "query/" + query : ""}${
      page !== 0 ? "?page=" + page : ""
    }${size.length !== 0 && size !== "All" ? "&size=" + size : ""}`;
    setUrl(url);
    props.handleInput(url);
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset disabled={props.disabled}>
          <label>
            query
            <input
              name="query"
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <br />
          </label>
          <label>
            page number:
            <input
              name="page"
              type="text"
              value={page}
              onChange={e => setPage(e.target.value)}
            />
            <br />
          </label>
          <label>
            image size:
            <select
              name="size"
              value={size}
              onChange={e => setSize(e.target.value)}
            >
              {options}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  );
}
