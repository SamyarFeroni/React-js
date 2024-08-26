import { useState } from "react";
import "./App.css";

function App() {
  //useState consts
  const [state, setState] = useState({
    cakeCount: 20,
    iceCreamCount: 10,
    showCakeButtons: false,
    showIceCreamButtons: false,
  });
  //functions

  //functions of cake
  function plusCakeCount() {
    setState((prevState) => ({
      ...prevState,
      cakeCount: prevState.cakeCount + 1,
    }));
  }
  function minusCakeCount() {
    if (state.cakeCount > 0) {
      setState((prevState) => ({
        ...prevState,
        cakeCount: prevState.cakeCount - 1,
      }));
    }
  }
  function handleCakeSell() {
    // setShowCakeButtons(true);
    setState((prevState) => ({
      ...prevState,
      showCakeButtons: true,
    }));
  }
  //functions of IceCeram
  function plusIceCreamCount() {
    // setIceCreamCount((iceCreamCount) => iceCreamCount + 1);
    setState((prevState) => ({
      ...prevState,
      iceCreamCount: prevState.iceCreamCount + 1,
    }));
  }
  function minusIceCreamCount() {
    if (state.iceCreamCount > 0) {
      setState((prevState) => ({
        ...prevState,
        iceCreamCount: prevState.iceCreamCount - 1,
      }));
    }
  }
  function handleIceCreamSell() {
    // setShowIceCreamButtons(true);
    setState((prevState) => ({
      ...prevState,
      showIceCreamButtons: true,
    }));
  }

  return (
    <div className="App">
      <h2>
        Cake<button onClick={handleCakeSell}>Sell Cake</button>
        {state.showCakeButtons &&(
          <>
            <button onClick={plusCakeCount}>+</button>{" "}
            <button onClick={minusCakeCount}>-</button>
          </>
        )}
        Count: <span>{state.cakeCount}</span>
      </h2>
      <h2>
        Ice Cream
        <button onClick={handleIceCreamSell}>Sell Ice Cream</button>
        {state.showIceCreamButtons && (
          <>
            <button onClick={plusIceCreamCount}>+</button>
            <button onClick={minusIceCreamCount}>-</button>
          </>
        )}
        Count: <span>{state.iceCreamCount}</span>
      </h2>
    </div>
  );
}

export default App;
