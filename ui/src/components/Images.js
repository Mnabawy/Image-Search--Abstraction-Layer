import React, { useState } from "react";
import Form from "./Form";
import Select from "./Select";

export default function Images(props) {
  const [inputs, setInputs] = useState({
    page: 0,
    imageSize: "",
    query: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  // const [disabled, setDisable] = useState(false);

  let url = "http://image-search-abstraction-layer.freecodecamp.rocks/";

  function handleInput(url) {
    setNewUrl(url);
  }

  function handleDisable(value) {
    value === "recent" ? setDisabled(true) : setDisabled(false);
    if (value === "recent") {
      setNewUrl(
        "http://image-search-abstraction-layer.freecodecamp.rocks/recent"
      );
    } else {
      setNewUrl("");
    }
  }

  const useUrl = (
    <p>
      here is your URL: <a href={url}>{newUrl.length === 0 ? url : newUrl}</a>
    </p>
  );

  return (
    <div>
      <p style={{ display: "inline" }}>Type of Search:</p>
      <Select handleDisable={handleDisable} />
      <Form
        url={url}
        handleInput={handleInput}
        newUrl={newUrl}
        disabled={disabled}
      />
      {useUrl}
    </div>
  );
}
