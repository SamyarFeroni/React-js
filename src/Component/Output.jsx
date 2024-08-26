export default function Output(){
    return(
        <div className="App">
        <h2>
          Cake<button onClick={handleCakeSell}>Sell Cake</button>
          {showCakeButtons && (
            <>
              <button onClick={plusCakeCount}>+</button>{" "}
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
    )
}