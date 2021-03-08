import React, { useRef, useState } from "react";
import Router from "next/router";

export const Searchbar = ({ base, param, paramValue = "" }) => {
  const inputRef = useRef(paramValue);
  const [input, setInput] = useState(paramValue);
  const url = `/${base}s`;

  const handleSubmit = () => {
    const text = input;
    const params = text !== "" ? `?${param}=${text}` : "";
    Router.push(`${url}${params}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleInput = ({ target }) => {
    const text = target.value;
    setInput(text.trim());
  };

  return (
    <div className="searchbar">
      <label htmlFor="input" className="searchbar__label">
        Find your {base}
      </label>
      <input
        type="text"
        name="input"
        className="searchbar__input"
        placeholder="Spider-Man"
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn btn--primary searchbar__btn"
        onClick={handleSubmit}
      >
        Find!
      </button>
    </div>
  );
};
