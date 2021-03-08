import Link from "next/link";
import React from "react";

export const ComicCard = ({ comic }) => {
  const imgUrl = comic.thumbnail
    ? `${comic.thumbnail.path}.${comic.thumbnail.extension}`
    : "/img/user-default.png";
  return (
    <div className="comic-card">
      <figure className="comic-card__figure">
        <img src={imgUrl} className="comic-card__photo" alt="" />
      </figure>
      <div className="comic-card__text-wrap">
        <p className="comic-card__title">{comic.title}</p>
        <Link href={`/comics/${comic.id}`}>
          <a className="btn btn--primary comic-card__btn">Details</a>
        </Link>
      </div>
    </div>
  );
};
