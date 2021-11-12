import React, { useEffect, useState } from 'react';
import './App.css';

const Menu = () => {

  const API_KEY = '';

  const [coins, setCoins] = useState([]);
  
  const [InputCoin, setInputCoin] = useState('');

  useEffect(() => {
    setCoins(coins);
  }, [coins]);

  const OnInputCoinChange = (e) => {
    let coin = e.target.value;
    setInputCoin(coin);
  };
  
  const AddCoin = () => {
    if (InputCoin === '') return;
    let updatedCoins = coins;
    updatedCoins.push(InputCoin);
    setCoins(updatedCoins);
  };
  
  const RemoveCoin = () => {
    if (InputCoin === '') return;
    let updatedCoins = coins.filter((item) => item !== InputCoin);
    setCoins(updatedCoins);
  };
  
  const ClearCoins = () => {
    setCoins([]);
  }

  return (
    <div className='menu-container'>
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
    </div>
  );
};

const App = () => {
  return (
    <div className='app-container'>
      <Menu />
    </div>
  );
}

export default App;
