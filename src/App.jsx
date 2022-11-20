import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { loadStdlib } from "@reach-sh/stdlib";

function App() {
  const [reach, setReach] = useState();
  const [provider, setProvider] = useState();
  const [isFunded, setIsFunded] = useState(false);
  const [claim, setClaim] = useState({redeemed:false, amount:0});
  
  const state = {
    reach,
    setReach,
    provider,
    setProvider,
    isFunded,
    setIsFunded,
    claim,
    setClaim
  };

  useEffect(() => {
    async function loadChainData() {
      const stdlib = loadStdlib(provider);
      setReach(stdlib);
    }
    if (typeof provider !== "undefined") {
      loadChainData();
    }
  }, [provider]);

  useEffect(() => {
    const performReachCommands = async () => {};
    performReachCommands();
  }, [reach]);

  return (
    <div className="App flex flex-col h-screen justify-between">
      <Nav provider={provider} setProvider={setProvider} />
      <Hero state={state} />
      <Footer />
    </div>
  );
}

export default App;
