import React from "react";
import CharactersItem from "./CharactersItem";
import spinner from "../../img/spinner.gif";

const Characters = ({ items, isLoading }) => {
  return isLoading ? (
    <img
      src={spinner}
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt="loading"
    />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharactersItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default Characters;
