import Container from './Container';

export default function StatsFooter() {
  return (
    <div className="stats__footer-wrapper">
      <Container>
        <footer className="footer">
          <p className="footer__logo stats">AppCo</p>
          <p className="footer__rights stats">
            All rights reserved by ThemeTags
          </p>
          <p className="footer__trademark stats">Copyrights © 2019.</p>
        </footer>
      </Container>
    </div>
  );
}
