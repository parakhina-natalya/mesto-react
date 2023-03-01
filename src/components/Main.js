import editIcon from '../images/edit-icon.svg';
import addIcon from '../images/add-icon.svg';
import React from 'react';
import api from '../utils/api.js';
import Card from '../components/Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState('Имя');
  const [userDescription, setUserDescription] = React.useState('О себе');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.uploadingUserInformation(),
      api.getInitialCards()
    ])
      .then(([info, dataCards]) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
        setCards(dataCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box"
          onClick={props.onEditAvatar}>
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__box">
            <h1 className="profile__author text-overflow">
              {userName}
            </h1>
            <button
              className="button button_el_edit"
              type="button"
              onClick={props.onEditProfile}>
              <img
                className="button__edit-icon"
                src={editIcon}
                alt="Редактировать профиль" />
            </button>
          </div>
          <p className="profile__slogan text-overflow">
            {userDescription}
          </p>
        </div>
        <button
          className="button button_el_add"
          type="button"
          onClick={props.onAddPlace}>
          <img
            className="button__add-icon"
            src={addIcon}
            alt="Добавить" />
        </button>
      </section>
      <section className="cards" aria-label="Фотогалерея">
        <ul className="cards__box">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;