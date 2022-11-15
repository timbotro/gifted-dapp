import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { loadStdlib } from '@reach-sh/stdlib';
import {ethers} from "ethers"

const stdlib = loadStdlib();
const providerEnv = 'TestNet';

function App() {
  const [session, setSession] = useState();
  const [provider, setProvider] = useState();

  return (
    <div className="App">
      <Nav provider={provider} setProvider={setProvider}/>
      <Hero />
    </div>
  );
}

export default App;
