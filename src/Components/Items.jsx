import { useState } from "react";
import View from "./View";

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
//Function for btn sell Ice
  function handleIceCreamSell() {
    // setShowIceCreamButtons(true);
    setState((prevState) => ({
      ...prevState,
      showIceCreamButtons: true,
    }));
  }
  // Function for btn sell Cake 
  function handleCakeSell() {
    setState((prevState) => ({
      ...prevState,
      showCakeButtons: true,
    }));
  }
  return (
    <View
      state={state}
      handleIceCreamSell={handleIceCreamSell}
      handleCakeSell={handleCakeSell}
      UpdateCount={UpdateCount}
    />
  );
}
