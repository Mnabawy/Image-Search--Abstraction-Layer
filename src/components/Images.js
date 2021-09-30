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
    } else if (value === "recent") {
      setNewUrl("");
    }
  }

  const useUrl = (
    <p>
      here is your URL:
      {newUrl.length === 0 ? (
        <a href={url}>{url} </a>
      ) : (
        <a href={newUrl}>{newUrl} </a>
      )}
    </p>
  );
  console.log(newUrl);
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
