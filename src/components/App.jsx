import Header from './Header';
import Main from './Main';
import Footer from './Footer';
export default function App() {
  return (
    <>
      <div className="header__bckg-wrapper">
        <Header />
        <div className="footer__bckg-wrapper">
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}
