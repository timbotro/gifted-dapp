import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { loadStdlib } from '@reach-sh/stdlib';
import MetaMaskOnboarding from '@metamask/onboarding';

const stdlib = loadStdlib();
const providerEnv = 'TestNet';

function App() {
  const [session, setSession] = useState();

  return (
    <div className="App">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
