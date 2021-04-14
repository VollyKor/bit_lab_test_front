import phoneImg from '../styles/images/mobilePhone.png';
import Container from './Container';
import MainTitle from './MainTitle';
import Products from './Products';
import Form from './Form';

export default function Main() {
  return (
    <Container>
      <main className="main">
        <section className="hero">
          <MainTitle />
          <div className="hero__thumb">
            <img src={phoneImg} alt="phone img" className="hero__img" />
          </div>
        </section>
        <Products />
        <Form />
      </main>
    </Container>
  );
}
