import React from "react";
import trashTop from "../images/trash-top.svg";
import trashBottom from "../images/trash-bottom.svg";

export default function Card({ name, link, alt, likes, onCardClick }) {
  function handleClick() {
    onCardClick({ name, link, alt });
  }

  return (
    <div className="photo-card">
      <button type="button" className="photo-card__btn-delete">
        <div className="photo-card__trash">
          <img
            src={trashTop}
            alt="корзина-верх"
            className="photo-card__delete-top"
          />
          <img
            src={trashBottom}
            alt="'корзина-низ"
            className="photo-card__delete"
          />
        </div>
      </button>
      <img
        src={link}
        alt={alt}
        className="photo-card__image"
        onClick={handleClick}
      />
      <div className="photo-card__caption">
        <h2 className="photo-card__text">{name}</h2>
        <div className="photo-card__container-like">
          <button type="button" className="photo-card__like"></button>
          <p className="photo-card__like-count">{likes}</p>
        </div>
      </div>
    </div>
  );
}
