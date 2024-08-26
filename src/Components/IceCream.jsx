import { useState } from "react";
export default function IceCream() {
  const [state, setState] = useState({
    iceCreamCount: 10,
    showIceCreamButtons: false,
  });
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
    <div>
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
