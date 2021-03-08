import Link from "next/link";
import React from "react";

export const CharacterCard = ({ character }) => {
  const imgUrl = character.thumbnail
    ? `${character.thumbnail.path}.${character.thumbnail.extension}`
    : "/img/user-default.png";
  return (
    <div className="character-card">
      <figure className="character-card__figure">
        <img
          src={imgUrl}
          className="character-card__photo"
          alt={character.name}
        />
      </figure>
      <p className="character-card__title">{character ? character.name : ""}</p>
      <Link href={`/characters/${character.id}`}>
        <a className="btn btn--primary character-card__btn">Details</a>
      </Link>
    </div>
  );
};
