import closeIcon from '../images/close-icon.svg';

function PopupWithForm(props) {
  return (
    <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="button button_el_close"
          type="button"
          onClick={props.onClose}>
          <img className="button__close-icon"
            src={closeIcon}
            alt="Закрыть" />
        </button>
        <h2 className="popup__title">
          {`${props.title}`}
        </h2>
        <form className="form form_edit"
          name={`form_${props.name}`}
          noValidate
          onSubmit={props.onSubmit}>
          {props.children}
          <button className="button button_el_save button_el_save-edit"
            type="submit">
            <span className="button__text-content">{`${props.button}`}</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;