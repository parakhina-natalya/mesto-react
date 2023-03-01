import React from 'react';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from '../components/PopupWithForm.js';
import ImagePopup from '../components/ImagePopup.js';


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState([false, {}]);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard([true, card]);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard([false, {}]);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} />

      <Footer />

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        button="Сохранить"
        onClose={closeAllPopups}>
        <input className="form__input form__input_el_avatar"
          id="avatar-input"
          type="url"
          name="avatar"
          defaultValue=""
          placeholder="Ссылка на аватар"
          required />
        <span className="avatar-input-error form__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        button="Сохранить"
        onClose={closeAllPopups}>
        <input className="form__input form__input_el_author" 
          id="author-input"
          type="text" 
          name="author"
          defaultValue="" 
          placeholder="Имя"
          required 
          minLength="2" 
          maxLength="40" />
        <span className="author-input-error form__error"></span>
        <input className="form__input form__input_el_slogan"
          id="slogan-input" 
          type="text" 
          name="slogan" 
          defaultValue=""
          placeholder="О себе" 
          required
          minLength="2" 
          maxLength="200" />
        <span className="slogan-input-error form__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        button="Создать"
        onClose={closeAllPopups}>
        <input className="form__input form__input_el_title"
          id="title-input"
          type="text"
          name="title"
          defaultValue=""
          placeholder="Название"
          required
          minLength="2"
          maxLength="30" />
        <span className="title-input-error form__error"></span>
        <input className="form__input form__input_el_url"
          id="url-input"
          type="url"
          name="url"
          defaultValue=""
          placeholder="Ссылка на картинку"
          required />
        <span className="url-input-error form__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        button="Да"
        onClose={closeAllPopups}>
      </PopupWithForm>

      <ImagePopup
        name="figure"
        onClose={closeAllPopups}
        card={selectedCard} />
    </div>
  );
}

export default App;
