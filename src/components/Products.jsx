import pencils from '../styles/images/pencils.svg';
import lock from '../styles/images/lock.svg';
import devices from '../styles/images/devices.svg';

export default function Products() {
  return (
    <section className="products">
      <h2 className="products__title">
        Why{' '}
        <span className="products__title-accent">
          small business owners love
        </span>{' '}
        AppCo?
      </h2>
      <p className="products__subtitle">
        Our design projects are fresh and simple and will benefit your business
        greatly. Learn more about our work!
      </p>
      <ul className="products__list">
        <li className="products__item">
          <div className="product__item-thumb">
            <img src={pencils} alt="pencils" />
          </div>
          <h3 className="products__item-subtitle">Clean Design</h3>
          <p className="products__item-text">
            Increase sales by showing true dynamics of your website.
          </p>
        </li>
        <li className="products__item">
          <div className="product__item-thumb">
            <img src={lock} alt="lock" />
          </div>
          <h3 className="products__item-subtitle">Secure Data</h3>
          <p className="products__item-text">
            Build your online store’s trust using Social Proof & Urgency.
          </p>
        </li>
        <li className="products__item">
          <div className="product__item-thumb">
            <img src={devices} alt="devices" />
          </div>
          <h3 className="products__item-subtitle">Retina Ready</h3>
          <p className="products__item-text">
            Realize importance of social proof in customer’s purchase decision.
          </p>
        </li>
      </ul>
    </section>
  );
}
