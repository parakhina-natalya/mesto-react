import delIcon from '../images/del-icon.svg';

function Card(props) {

  function handleClick() {
    props.onClick(props.card);
  }

  return (
    <li className="card">
      <button className="button button_el_delete" type="button">
        <img className="button__add-delete"
          src={delIcon}
          alt="Удалить" />
      </button>
      <img className="card__img"
        src={props.card.link}
        alt={props.card.name}
        onClick={() => handleClick()} />
      <div className="card__info">
        <h2 className="card__title text-overflow"> {props.card.name} </h2>
        <div className="card__like-box">
          <button className="button button_el_like" type="button">
          </button>
          <p className="card__likes-total">
            {props.card.likes.length}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Card;