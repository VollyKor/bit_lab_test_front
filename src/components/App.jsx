import { Route, Switch } from 'react-router-dom';
import NavBarStats from './NavBarStats';
import StatsFooter from './StatsFooter';
import StatsHeader from './StatsHeader';
import Container from './Container';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import StatsTable from './StatsTable';
import SinglePage from './UserPage';

export default function App() {
  return (
    <>
      <Switch>
        {/* <Route path="/stats/:userId" >
          <Container>
            <StatsHeader />
          </Container>
        </Route> */}

        <Route path="/stats">
          <StatsHeader />
          <Container>
            <NavBarStats />
            <Route path="/stats" exact>
              <StatsTable />
            </Route>
            <Route path="/stats/user/:id">
              <SinglePage />
            </Route>
          </Container>
          <StatsFooter />
        </Route>

        <Route path="/" exact>
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
