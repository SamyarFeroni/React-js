import { useState } from "react";
export default function Cake() {
  const [state, setState] = useState({
    cakeCount: 20,
    showCakeButtons: false,
  });
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
  return (
    <div>
      <h2>
        Cake<button onClick={handleCakeSell}>Sell Cake</button>
        {state.showCakeButtons && (
          <>
            <button onClick={plusCakeCount}>+</button>{" "}
            <button onClick={minusCakeCount}>-</button>
          </>
        )}
        Count: <span>{state.cakeCount}</span>
      </h2>
    </div>
  );
}
