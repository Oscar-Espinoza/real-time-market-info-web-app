/* eslint-disable linebreak-style */
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    priceUsd: '6379.3997635993342453',
    time: 1530403200000,
  },
  {
    priceUsd: '6466.3135622762295280',
    time: 1530489600000,
  },
  {
    priceUsd: '6601.0724971279524219',
    time: 1530576000000,
  },
  {
    priceUsd: '6581.0092630267574887',
    time: 1530662400000,
  },
  {
    priceUsd: '6629.1362927171773870',
    time: 1530748800000,
  },
  {
    priceUsd: '6549.1112450806328349',
    time: 1530835200000,
  },
  {
    priceUsd: '6655.9108972488685303',
    time: 1530921600000,
  },
  {
    priceUsd: '6818.2081672225807333',
    time: 1531008000000,
  },
  {
    priceUsd: '6741.7764822044089258',
    time: 1531094400000,
  },
  {
    priceUsd: '6525.5093638185088059',
    time: 1531180800000,
  },
];

function CurrencyHistory() {
  const formatter = (time) => {
    const date = new Date(time);
    return date.toLocaleString('default', { month: 'short' });
  };

  return (
    <LineChart width={600} height={300} data={data} style={{ backgroundColor: '#fff' }} className="line-chart">
      <XAxis dataKey="time" tickFormatter={formatter} />
      <YAxis />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="priceUsd" stroke="#8884d8" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}

export default CurrencyHistory;
