import { useState } from "react";

export default function Items() {
  const [state, setState] = useState({
    cakeCount: 20,
    showCakeButtons: false,
    iceCreamCount: 10,
    showIceCreamButtons: false,
  });
  // Function for PlusCount And MinusCount
  function UpdateCount(items, Operations) {
    setState((prevState) => {
      const plus = Operations === "plus" ? 1 : -1;
    //   console.log(items, plus, Math.max(prevState[`${items}Count`] + plus));

      return {
        ...prevState,
        [`${items}Count`]: Math.max(prevState[`${items}Count`] + plus, 0),
      };
    });
  }

  function handleIceCreamSell() {
    // setShowIceCreamButtons(true);
    setState((prevState) => ({
      ...prevState,
      showIceCreamButtons: true,
    }));
  }
  function handleCakeSell() {
    setState((prevState) => ({
      ...prevState,
      showCakeButtons: true,
    }));
  }
  return (
    <div>
      <h2>
        Ice Cream
        <button onClick={handleIceCreamSell}>Sell Ice Cream</button>
        {state.showIceCreamButtons && (
          <>
            <button onClick={() => UpdateCount("iceCream", "plus")}>+</button>
            <button onClick={() => UpdateCount("iceCream", "minus")}>-</button>
          </>
        )}
        Count: <span>{state.iceCreamCount}</span>
      </h2>
      <h2>
        Cake
        <button onClick={handleCakeSell}>Sell Cake</button>
        {state.showCakeButtons && (
          <>
            <button onClick={() => UpdateCount("cake", "plus")}>+</button>
            <button onClick={() => UpdateCount("cake", "minus")}>-</button>
          </>
        )}
        Count: <span>{state.cakeCount}</span>
      </h2>
    </div>
  );
}
