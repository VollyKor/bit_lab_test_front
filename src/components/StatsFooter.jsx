import Container from './Container';

export default function StatsFooter() {
  return (
    <div className="stats__footer-wrapper">
      <Container>
        <footer className="footer">
          <span className="footer__logo">AppCo</span>
          <span className="footer__rights">
            All rights reserved by ThemeTags
          </span>
          <span className="footer__trademark">Copyrights © 2019.</span>
        </footer>
      </Container>
    </div>
  );
}
