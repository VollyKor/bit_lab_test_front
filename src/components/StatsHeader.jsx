import Container from './Container';

export default function Header() {
  return (
    <div className="stats__header-wrapper">
      <Container>
        <header className="stats__header">
          <p className="header__logo">AppCo</p>
        </header>
      </Container>
    </div>
  );
}
