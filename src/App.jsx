import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

function App() {
  const [reach, setReach] = useState();
  const [provider, setProvider] = useState();

  useEffect(() => {
    async function loadChainData() {
      const stdlib = loadStdlib(provider);
      setReach(stdlib);
      console.log(await provider.getBalance("0x0c3D44dF44ACD523092454309067858Eff444693"));
    }
    if (typeof provider !== "undefined") {
      loadChainData();
    }
  }, [provider]);

  useEffect(() => {
    const performReachCommands = async () => {
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);

      console.log(`Acc is ${acc}`);
      console.log(`Acc is ${balAtomic}`);
      console.log(`Acc is ${bal}`);
    };
    performReachCommands();
  }, [reach]);

  return (
    <div className="App min-h-screen">
      <Nav provider={provider} setProvider={setProvider} />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
