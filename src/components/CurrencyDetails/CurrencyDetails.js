/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { BsTriangleFill, BsCurrencyExchange, BsArrowLeftCircle } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './currencyDetails.css';

export default function CurrencyDetails(props) {
  const { currencyName } = useParams();
  const { views } = props;
  const currency = useSelector((state) => state.currencies.currencies
    .find((currency) => currency.name === currencyName));

  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: ' Thousand' },
      { value: 1e6, symbol: ' Million' },
      { value: 1e9, symbol: ' Billion' },
      { value: 1e12, symbol: 'Tril' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup.slice().reverse().find((item) => num >= item.value);
    return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
  }

  return (
    <div className="currency-detail">
      <Link to="/" className="back-home-btn">
        <BsArrowLeftCircle />
      </Link>
      <div className="currency-title">
        <div className="title-img">
          <BsCurrencyExchange />
        </div>
        <h2 className="title">
          {currency.name || ''}
          {' '}
          (
          {currency.symbol || ''}
          )
          {' '}
          <br />
          <span>
            {views}
            {' '}
            Views
          </span>
        </h2>
      </div>

      <div className="stats-separator dark-bg">
        Stats for
        {' '}
        {currency.name || ''}
      </div>

      <div className="currency-details-list">
        <div className="currency-details-row light-bg">
          <div className="currency-details-left">Rank:</div>
          <div className="currency-details-right">{currency.rank || ''}</div>
        </div>
        <div className="currency-details-row dark-bg">
          <div className="currency-details-left">Supply:</div>
          <div className="currency-details-right">{nFormatter(currency.supply || '')}</div>
        </div>
        <div className="currency-details-row light-bg">
          <div className="currency-details-left">Max Supply:</div>
          <div className="currency-details-right">{currency.maxSupply ? nFormatter(currency.maxSupply) : 'No defined cap'}</div>
        </div>
        <div className="currency-details-row dark-bg">
          <div className="currency-details-left">Market Cap (USD):</div>
          <div className="currency-details-right">{nFormatter(currency.marketCapUsd) || ''}</div>
        </div>
        <div className="currency-details-row light-bg">
          <div className="currency-details-left">Change (24hr):</div>
          <div className="currency-details-right">
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
          </div>
        </div>
      </div>
    </div>
  );
}

CurrencyDetails.propTypes = {
  views: PropTypes.number,
};

CurrencyDetails.defaultProps = {
  views: Math.floor(Math.random() * 6000) + 1000,
};
