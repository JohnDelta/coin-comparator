# Coin comparator

I utilize the [CoinMarketCap](https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyQuotesLatest)
API to fetch change rates only from my desired coins given as input.

I also have a comparator value for each coin's row that calculates the average of the 1h, 24h, 7d, 30d, 60d, 90d percentage change rates.
The coins are sorted by their comparator values.

## Run locally

- git clone repo
- npm install
- npm install react-router-dom
- npm run build
- npm install -g serve
- serve -s build

## Deploy to gh

- npm install gh-pages --save-dev
- Add to package.json
  - At the top level `"homepage": "http://nameOfGHOwner.github.io/coin-comparator"`
  - In the scripts `"predeploy": "npm run build",` and `"deploy": "gh-pages -d build"`

## CORS Issues

- If you face any issues with CORS [check](https://stackoverflow.com/a/54390080/14434647)
- Or [this](https://stackoverflow.com/a/53977372/14434647)
- add the chrome's cors plugin (worked)