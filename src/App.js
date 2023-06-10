import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollarInput, setDollarInput] = useState("");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [symbol, setSymbol] = useState("BTC");
  const [result, setResult] = useState("");

  const onOptionChange = (event) => {
    const selectedCoinId = event.target.value;
    const selectedCoin = coins.find((coin) => coin.id === selectedCoinId);
    setExchangeRate(selectedCoin.quotes.USD.price);
    setSymbol(selectedCoin.symbol);
  };

  const onInputChange = (event) => {
    setDollarInput(event.target.value);
    setResult("");
  };

  const onInputSubmit = (event) => {
    event.preventDefault();
    if (exchangeRate === 1) {
      const defaultExchangeRate = coins.find((coin) => coin.rank === 1).quotes
        .USD.price;
      setExchangeRate(defaultExchangeRate);
    }
    setResult(parseFloat(dollarInput) / exchangeRate);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {coins.length > 0 ? `(${coins.length})` : null}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onOptionChange}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <form onSubmit={onInputSubmit}>
            <input
              onChange={onInputChange}
              value={dollarInput}
              placeholder="Input USD..."
              type="number"
              min={0}
            />
            <input type="submit" value={"Go!"} />
          </form>
          {result === "" ? null : (
            <p>{`${dollarInput} USD => ${result} ${symbol}`}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
