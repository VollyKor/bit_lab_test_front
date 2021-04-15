import { Link } from 'react-router-dom';

export default function MainTitle() {
  return (
    <div className="hero__title-wrapper">
      <h1 className="hero__title">
        <span className="hero__accent">Brainstorming</span> for desired perfect
        Usability
      </h1>
      <p className="hero__text">
        Our design projects are fresh and simple and will benefit your business
        greatly. Learn more about our work!
      </p>
      <Link to="/stats?page=1&limit=50" className="hero__button">
        Views Stats
      </Link>
    </div>
  );
}
