import React, { useEffect, useState } from 'react';
import './App.css';
import dataExample from './TestData';

const EUR_ID = '2790';

const Menu = ({setData}) => {

  const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';

  const API_KEY = 'ba3fe6b2-0646-49d7-9957-80552fa22f9e';

  const API_URI = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?';

  const [coins, setCoins] = useState([]);
  
  const [InputCoin, setInputCoin] = useState('');

  useEffect(() => {
    setCoins(coins);
  }, [coins]);

  const OnInputCoinChange = (e) => {
    e.preventDefault();
    let coin = e.target.value;
    setInputCoin(coin);
  };
  
  const AddCoin = () => {
    if (InputCoin === '') return;
    setCoins(prevCoins => [...prevCoins, InputCoin]);
  };
  
  const RemoveCoin = () => {
    if (InputCoin === '') return;
    setCoins(prevCoins => [...prevCoins.filter((item) => item !== InputCoin)]);
  };
  
  const ClearCoins = () => {
    setCoins([]);
  }

  const FetchData = async () => {
    if (coins.length === 0) return;
    let uri = API_URI + 'convert_id=' + EUR_ID + '&symbol=' + coins.join(','); 
    var myHeaders = new Headers();
    myHeaders.append("X-CMC_PRO_API_KEY", "ba3fe6b2-0646-49d7-9957-80552fa22f9e");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(uri, requestOptions)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.log('error', error));
  }

  return (
    <div className='menu-container' key={coins.join("_")}>
      <div className='control-container'>
        <p className='title'>Input Coin</p>
        <input type='text' placeholder='ETH' onChange={(e) => {OnInputCoinChange(e)}} />
        <button className='add-button' onClick={() => {AddCoin()}}>Add</button>
        <button className='remove-button' onClick={() => RemoveCoin()}>Remove</button>
      </div>
      <div className='coins-container'>
        <p className='title'>Saved Coins</p>
        <div className='coins'>
          {coins.map((coin, index) => {
            return (
              <div key={'coin_'+index} className='coin'>{coin}</div>
            );
          })}
        </div>
        <button className='clear-button' onClick={() => {ClearCoins()}}>Clear</button>
      </div>
      <button className='fetch-button' onClick={() => {FetchData()}}>Load Data</button>
    </div>
  );
};

const CoinsTable = ({response}) => {

  // 1st. only average between the previous percent changes

  const CalculateComparator = (
      price,
      percentChange1h,
      percentChange24h,
      percentChange7d,
      percentChange30d,
      percentChange60d,
      percentChange90d) => {

        let percentChange1hWeight = 1;
        let percentChange24hWeight = 1;
        let percentChange7dWeight = 0.9;
        let percentChange30dWeight = 0.8;
        let percentChange60dWeight = 0.6;
        let percentChange90dWeight = 0.4;
        let priceWeight = 1 * price;

        let sum = percentChange1h * percentChange1hWeight + 
          percentChange24h * percentChange24hWeight + 
          percentChange7d * percentChange7dWeight + 
          percentChange30d * percentChange30dWeight + 
          percentChange60d * percentChange60dWeight + 
          percentChange90d * percentChange90dWeight;

        let avg = sum / 6;

        return avg;
  }

  const GetCoinsMapped = (response) => {

    let data = response.data;

    let coinsData = [];
    let keys = Object.keys(data);

    keys.forEach(key => {
      
      let price = data[key]['quote'][EUR_ID].price;

      let percentChange1h = data[key]['quote'][EUR_ID].percent_change_1h;
      let previous1hPrice = price - price * (percentChange1h / 100);

      let percentChange24h = data[key]['quote'][EUR_ID].percent_change_24h;
      let previous24hPrice = price - price * (percentChange24h / 100);

      let percentChange7d = data[key]['quote'][EUR_ID].percent_change_7d;
      let previous7hPrice = price - price * (percentChange7d / 100);

      let percentChange30d = data[key]['quote'][EUR_ID].percent_change_30d;
      let previous30dPrice = price - price * (percentChange30d / 100);

      let percentChange60d = data[key]['quote'][EUR_ID].percent_change_60d;
      let previous60dPrice = price - price * (percentChange60d / 100);

      let percentChange90d = data[key]['quote'][EUR_ID].percent_change_90d;
      let previous90dPrice = price - price * (percentChange90d / 100);

      let compareValue = CalculateComparator(price,
        percentChange1h,
        percentChange24h,
        percentChange7d,
        percentChange30d,
        percentChange60d,
        percentChange90d);

      coinsData.push({
        'symbol': data[key]['symbol'], 
        'price': price.toFixed(4) + '€',
        'percentChange1h': percentChange1h.toFixed(4) + '%',
        'previous1hPrice': previous1hPrice.toFixed(4) + '€',
        'percentChange24h': percentChange24h.toFixed(4) + '%',
        'previous24hPrice': previous24hPrice.toFixed(4) + '€',
        'percentChange7d': percentChange7d.toFixed(4) + '%',
        'previous7hPrice': previous7hPrice.toFixed(4) + '€',
        'percentChange30d': percentChange30d.toFixed(4) + '%',
        'previous30dPrice': previous30dPrice.toFixed(4) + '€',
        'percentChange60d': percentChange60d.toFixed(4) + '%',
        'previous60dPrice': previous60dPrice.toFixed(4) + '€',
        'percentChange90d': percentChange90d.toFixed(4) + '%',
        'previous90dPrice': previous90dPrice.toFixed(4) + '€',
        'compareValue': compareValue.toFixed(4)
      });
    });

    coinsData.sort((a, b) => a.compareValue - b.compareValue); // Ascending

    return coinsData;
  }

  if (response === null || response.length === 0) return [];

  return (
    <div className='coinsTable-container'>
      <div className='table'>
        <div className='header'>
          <div className='cell'>Coin</div>
          <div className='cell'>3 Months</div>
          <div className='cell'>2 Months</div>
          <div className='cell'>1 Month</div>
          <div className='cell'>7 Days</div>
          <div className='cell'>24 Hours</div>
          <div className='cell'>1 Hour</div>
          <div className='cell'>Current Price</div>
          <div className='cell'>Comparator</div>
        </div>
        {GetCoinsMapped(response).map((coin, index) => (
          <div className='row' key={'coinRow'+index}>
            <div className='cell'>{coin.symbol}</div>
            <div className='cell'>
              <p>{coin.percentChange90d}</p>
              <p>{coin.previous90dPrice}</p>
            </div>
            <div className='cell'>
              <p>{coin.percentChange60d}</p>
              <p>{coin.previous60dPrice}</p>
            </div>
            <div className='cell'>
              <p>{coin.percentChange30d}</p>
              <p>{coin.previous30dPrice}</p>
            </div>
            <div className='cell'>
              <p>{coin.percentChange7d}</p>
              <p>{coin.previous7hPrice}</p>
            </div>
            <div className='cell'>
              <p>{coin.percentChange24h}</p>
              <p>{coin.previous24hPrice}</p>
            </div>
            <div className='cell'>
              <p>{coin.percentChange1h}</p>
              <p>{coin.previous1hPrice}</p>
            </div>
            <div className='cell'>
              <p>{coin.price}</p>
            </div>
            <div className='cell'>{coin.compareValue}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const App = () => {

  const [data, setData] = useState([]);

  return (
    <div className='app-container'>
      <Menu setData={setData} />
      <CoinsTable response={data} />
    </div>
  );
}

export default App;
