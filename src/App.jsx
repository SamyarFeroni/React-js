import { useState } from "react";
import "./App.css";

function App() {
  //useState consts
  const [cakeCount, setCakeCount] = useState(0);
  const [iceCreamCount, setIceCreamCount] = useState(0);
  const [showCakeButtons, setShowCakeButtons] = useState(false);
  const [showIceCreamButtons, setShowIceCreamButtons] = useState(false);
  //functions

  //functions of cake
  function plusCakeCount() {
    setCakeCount((cakeCount) => cakeCount + 1);
  }
  function minusCakeCount() {
    if (cakeCount > 0) {
      setCakeCount((cakeCount) => cakeCount - 1);
    }
  }
  function handleCakeSell() {
    setShowCakeButtons(true);
  }
  //functions of IceCeram
  function plusIceCreamCount() {
    setIceCreamCount((iceCreamCount) => iceCreamCount + 1);
  }
  function minusIceCreamCount() {
    if (iceCreamCount > 0) {
      setIceCreamCount((iceCreamCount) => iceCreamCount - 1);
    }
  }
  function handleIceCreamSell() {
    setShowIceCreamButtons(true);
  }

  return (
    <div className="App">
      <h2>
        Cake
        <button onClick={handleCakeSell}>Sell Cake</button>
        {showCakeButtons && (
          <>
            <button onClick={plusCakeCount}>+</button>
            <button onClick={minusCakeCount}>-</button>
          </>
        )}
        Count: <span>{cakeCount}</span>
      </h2>

      <h2>
        Ice Cream
        <button onClick={handleIceCreamSell}>Sell Ice Cream</button>
        {showIceCreamButtons && (
          <>
            <button onClick={plusIceCreamCount}>+</button>
            <button onClick={minusIceCreamCount}>-</button>
          </>
        )}
        Count: <span>{iceCreamCount}</span>
      </h2>
    </div>
  );
}

export default App;
