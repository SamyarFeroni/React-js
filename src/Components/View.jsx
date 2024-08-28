export default function View({
    state,
    handleIceCreamSell,
    handleCakeSell,
    UpdateCount,
  }) {
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
  