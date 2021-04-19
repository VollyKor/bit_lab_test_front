import logo from '../styles/images/react-logo.svg';

export default function Loader() {
  return (
    <div className="loader">
      <h2 className="loader__title">
        While Heroku is waking up, you could watch ads
      </h2>
      <img src={logo} alt="App-logo" className="App-logo" />
    </div>
  );
}
