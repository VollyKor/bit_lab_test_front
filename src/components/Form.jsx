export default function Form() {
  return (
    <form className="form">
      <label className="form__label">
        <input className="form__input" type="email" placeholder="Subscribe" />
      </label>
      <button className="form__button" type="button">
        Subscribe
      </button>
    </form>
  );
}
