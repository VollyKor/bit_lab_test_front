import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Switch>
        <Route to="/stats" exact>
          <Header />
          789
        </Route>

        <Route to="/stats/:userId">
          <Header />
          123
        </Route>

        <Route to="/" exact>
          <div className="header__bckg-wrapper">
            <Header />
            <div className="footer__bckg-wrapper">
              <Main />
              <Footer />
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}
