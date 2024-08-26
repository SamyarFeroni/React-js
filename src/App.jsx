import { useState } from "react";
import "./App.css";
import Output from "./Component/Output";

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
    <Output/>
  );
}

export default App;
