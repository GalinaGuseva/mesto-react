import React from "react";
import "../index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
    alt: "",
  });

  function handleEditAvatarClick(e) {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick(e) {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick(e) {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick({ name, link, alt }) {
    setSelectedCard({ name, link, alt });
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "", alt: "" });
  };

  return (
    <div className="page">
      <div className="page__center">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonTitle="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            placeholder="Введите имя"
            className="popup__field popup__field_top"
            name="userName"
            id="name-input"
          />
          <input
            type="text"
            placeholder="О себе"
            className="popup__field"
            name="userJob"
            id="job-input"
          />
        </PopupWithForm>
        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          buttonTitle="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__field popup__field_top"
            name="avatar"
            id="avatar-url-input"
          />
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="Новое место"
          buttonTitle="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            placeholder="Название"
            className="popup__field popup__field_top"
            name="caption"
            id="text-input"
          />
          <input
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__field"
            name="link"
            id="url-input"
          />
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
