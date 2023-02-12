/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsTriangleFill, BsArrowRightCircle } from 'react-icons/bs';
import { fetchCurrencies } from '../../redux/Currencies/currencies';
import frontImg from '../../crypto.jpg';

export default function Home() {
  const dispatch = useDispatch();
  const { loading, currencies } = useSelector((state) => state.currencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  if (loading) {
    return (
      <h1>LOADING...</h1>
    );
  }

  function getBackgroundColor(i) {
    if (i % 2 === 0 && i !== 2 && i !== 6) {
      return 'dark-bg';
    } if (i === 3 || i === 7) {
      return 'dark-bg';
    }
    return 'light-bg';
  }

  return (
    <div className="container home">
      <section className="front-img-container">
        <img src={frontImg} alt="popular currencies" className="front-img" />
        <div className="layer">
          <div className="front-text">
            <div className="text">
              <h2>2023</h2>
              <p>Up to date!</p>
            </div>
            <div className="text">
              <h2>Over 1000</h2>
              <p>Cryptocurrencies</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container stats-container">
        <h2 className="stats-title dark-bg">All stats</h2>
        <ul className="stats">
          <li className="stat">
            <h3>1000+</h3>
            <p>Crypto - currencies</p>
          </li>
          <li className="stat">
            <h3>100 Mil+</h3>
            <p>Coins Supply</p>
          </li>
          <li className="stat">
            <h3>1 Mil+</h3>
            <p>History trades</p>
          </li>
          <li className="stat">
            <h3>1000+</h3>
            <p>Markets per coin</p>
          </li>
          <li className="stat light-bg">
            <h3>1,682</h3>
            <p>followers</p>
            <BsArrowRightCircle className="arrow-circle" />
          </li>
          <li className="stat dark-bg">
            <h3>58</h3>
            <p>Hire me</p>
            <BsArrowRightCircle className="arrow-circle" />
          </li>
        </ul>
      </section>
      <section className="currencies-container">
        <ul className="currencies">
          {currencies.slice(0, 10).map((currency, i) => (
            <li
              className={`currency ${getBackgroundColor(i)}`}
              key={currency.id}
            >
              <Link to={currency.name} className="currency-link">
                <div className="currency-text">
                  <h3>{currency.symbol}</h3>
                  <p>{currency.name}</p>
                </div>
                <div className="change-percent">
                  {currency.changePercent24Hr[0] === '-'
                    ? currency.changePercent24Hr.slice(0, 5)
                    : `+ ${currency.changePercent24Hr.slice(0, 4)}`}
                  %
                  {' '}
                  <BsTriangleFill
                    className={currency.changePercent24Hr[0] !== '-'
                      ? 'positive-per'
                      : 'negative-per'}
                  />
                  <BsArrowRightCircle className="arrow-circle" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
