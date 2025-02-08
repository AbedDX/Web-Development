import React, { useEffect } from "react";
import { memeCoinBank_backend } from "../../declarations/memeCoinBank_backend";


function App() {
  const dbank = memeCoinBank_backend;

  useEffect(() => {
    const handleLoad = async () => {
      update();
    };
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled", true);

    if (document.getElementById("input-amount").value.length !== 0) {
      await dbank.topUp(inputAmount);
    }

    if (document.getElementById("withdrawal-amount").value.length !== 0) {
      await dbank.withdraw(outputAmount);
    }

    await dbank.compound();

    update();

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";

    button.removeAttribute("disabled");
  };

  const update = async () => {
    const currentAmount = await dbank.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
  };

  return (
    <main>
      <div className="container">
        <img src="dbank_logo.png" alt="DBank logo" width="100" />
        <h1>
          Current Balance: $<span id="value">...</span>
        </h1>
        <div className="divider"></div>
        <form onSubmit={handleSubmit}>
          <h2>Amount to Top Up</h2>
          <input
            id="input-amount"
            type="number"
            step="0.01"
            min="0"
            name="topUp"
            defaultValue=""
          />
          <h2>Amount to Withdraw</h2>
          <input
            id="withdrawal-amount"
            type="number"
            name="withdraw"
            step="0.01"
            min="0"
            defaultValue=""
          />
          <input id="submit-btn" type="submit" value="Finalise Transaction" />
        </form>
      </div>
    </main>
  );
}

export default App;

