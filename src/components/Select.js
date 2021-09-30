import React, { useState } from "react";

export default function Select(props) {
  const [select, setSelect] = useState("search");

  function handleSubmit(e) {
    setSelect(e.target.value);
    props.handleDisable(select);
  }

  return (
    <select value={select} onChange={handleSubmit}>
      <option value="recent">search for images</option>
      <option value="search">see recent searches</option>
    </select>
  );
}
