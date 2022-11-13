import React, { useState } from "react";
import WorksModal from "./WorksModal";
import { emojisplosion } from "emojisplosion";
import detectEthereumProvider from "@metamask/detect-provider";

export default function Nav() {
  const [connected, setConnected] = useState(false);
  const [prov, setProv] = useState();
  const [accs, setAccs] = useState();
  const updateState = (bool) => {
    setConnected(bool);
  };

  function explode() {
    emojisplosion({
      emojiCount: 101,
      emojis: ["🎁"],
      physics: {
        initialVelocities: {
          rotation: {
            max: 14,
            min: -14,
          },
        },
        gravity: 0.1,
        framerate: 60,
      },
    });
    console.log("exploded");
  }

  const configureMoonbaseAlpha = async () => {
    const provider = await detectEthereumProvider({ mustBeMetaMask: true });
    if (provider) {
      try {
        const req = await provider.request({ method: "eth_requestAccounts" });
        setAccs(req);
        console.log(req)
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x507",
              chainName: "Moonbase Alpha",
              nativeCurrency: {
                name: "DEV",
                symbol: "DEV",
                decimals: 18,
              },
              rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
              blockExplorerUrls: ["https://moonbase.moonscan.io/"],
            },
          ],
        });
        const chainId = await provider.request({
          method: "eth_chainId",
        });
        if (chainId === "0x507") {
          
          updateState(true);
          setProv(provider);
          console.log(provider);
        }
        provider.on("accountsChanged", (accounts) => {
          if (accounts.length === 0) {
            console.log("Please connect to MetaMask.");
          }
        });
        provider.on("chainChanged", () => {
          window.location.reload();
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error("Please install MetaMask");
    }
  };

  return (
    <nav>
      <div className="navbar bg-neutral text-neutral-content row-span-full">
        <a className="btn btn-ghost normal-case text-xl">GIFTED</a>

        <label htmlFor="worksModal" className="btn">
          How it works
        </label>
        <WorksModal />

        {/* <OnboardingButton /> */}
        <button className="btn btn-main bg-green-500" onClick={configureMoonbaseAlpha}>
          {" "}
          {connected == false ? "Connect to Metamask" : accs[0]}
        </button>
      </div>
    </nav>
  );
}
