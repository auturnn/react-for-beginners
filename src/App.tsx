import { ChangeEvent, useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinPrice, setCoinPrice] = useState(0);
  const [inputData, setInputData] = useState(0);
  const [coins, setCoins] = useState([{
    id: "",
    name: "",
    symbol: "",
    quotes: {
      USD : {
        price: 0
      }
    }
  }]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof +e.target.value !== "number"){
      return ;
    }
    setInputData(+e.target.value);
  }

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) =>{
    if (typeof +e.target.value !== "number"){
      return ;
    }
    setCoinPrice(+e.target.value);
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setCoins(json);
      });
  }, []);

  function getCoins() {
    return (
      <div>
        ( $ ) : <input type="number" onChange={onInputChange} placeholder="Input Dollor" />
        <hr/>
        <select onChange={onSelect} style={{width:"187px"}}>
          <option value="0" defaultChecked>Select Coin</option>
        {coins.map((coin)=> {
          return (<option value={coin.quotes.USD.price} key={coin.id}>{coin.name} ({coin.symbol})</option>)
        })}
        </select>
        <input type="number" value={coinPrice*inputData} disabled/>
      </div>
    );
  }

  return (
    <div key={"coinSelect"}>
      <h1>The Coins {loading ? null : `(${coins.length}`})</h1>
      {loading ? <strong>Loading...</strong> : getCoins()}
    </div>
  );
}

export default App;
