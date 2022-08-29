import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <img src={userAvatar} alt={userName} className="profile__image" />
          <button
            type="button"
            onClick={onEditAvatar}
            className="profile__edit-avatar-button"
          ></button>
          <div className="profile__text-block">
            <div className="profile__text-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                onClick={onEditProfile}
                className="profile__edit-button"
                title="Редактировать"
              ></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onAddPlace}
          className="profile__add-button"
          title="Добавить фото"
        ></button>
      </section>

      <section className="photos" aria-label="Фотографии мест">
        <ul className="photos__list">
          {cards.map((card) => (
            <li key={card._id}>
              <Card
                id={card._id}
                name={card.name}
                link={card.link}
                alt={card.name}
                likes={card.likes.length}
                onCardClick={onCardClick}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
