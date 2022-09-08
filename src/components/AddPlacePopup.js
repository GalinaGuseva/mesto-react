import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddNewPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNewPlace({ name, link });
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeLink = (e) => {
    setLink(e.target.value);
  };

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonTitle="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Название"
        className="popup__field popup__field_top"
        name="caption"
        id="text-input"
        value={name}
        onChange={handleChangeName}
      />
      <input
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__field"
        name="link"
        id="url-input"
        value={link}
        onChange={handleChangeLink}
      />
    </PopupWithForm>
  );
}
