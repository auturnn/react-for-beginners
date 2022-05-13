import { useEffect, useState, ChangeEvent } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinPrice, setCoinPrice] = useState(0);
  const [coins, setCoins] = useState([
    {
      id: "",
      name: "",
      rank: 0,
      symbol: "",
      quotes: {
        USD: {
          price: 0,
        },
      },
    },
  ]);
  const [coinName, setCoinName] = useState("");
  const [inputMoney, setInputMoney] = useState(0);

  const onChangeFn = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof e.target.value !== "number") {
      return;
    }

    setInputMoney(e.target.value);
  };

  const onSelectFn = (e: ChangeEvent<HTMLSelectElement>) => {
    setCoinName(e.target.value);
    coins.filter((coin) => coin.name === e.target.value);
    // setCoinPrice();
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  function getPage() {
    return (
      <div key="inputMoney">
        <span>$ : </span>
        <input
          type="number"
          style={{
            width: "500px",
          }}
          onChange={onChangeFn}
        />
        <hr />
        <select
          style={{
            width: "100px",
          }}
          onChange={onSelectFn}
        >
          {coins.map((coin) => {
            return (
              <option key={coin.id} value={coin.name}>
                {coin.name} ({coin.symbol})
              </option>
            );
          })}
        </select>
        {/* <input type="number" value={} /> */}
      </div>
    );
  }
  return (
    <div key={"hi"}>
      <h1>The Coins {loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : getPage()}
    </div>
  );
}

export default App;
