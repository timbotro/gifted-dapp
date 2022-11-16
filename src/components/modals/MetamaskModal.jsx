import React, {useEffect} from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

export default function MetamaskModal(props) {
  const configureMoonbaseAlpha = async () => {
    let provider = props.provider;
    if (typeof provider === "undefined") {
      provider = await detectEthereumProvider({ mustBeMetaMask: true });
      if (provider) {
        try {
          const req = await provider.request({ method: "eth_requestAccounts" });
          props.setAddress(req);
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
            const prov = new ethers.providers.Web3Provider(window.ethereum);
            props.setProvider(prov);
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
    } else {
      console.log("YOU ARE ALREADY CONNECTED");
    }
  };

  const disconnectMetamask = () =>{
    props.setProvider("") 
    window.location.reload();
  }

  const connected = typeof(props.provider) !== "undefined"

  return (
    <div>
      <input type="checkbox" id="metamaskModal" className="modal-toggle" />
      <div className="modal text text-neutral-focus">
        <div className="modal-box base-300">
          <h3 className="font-bold text-lg">Connect to a Metamask Wallet</h3>
          <div>
            {!connected ? <label  htmlFor="metamaskModal" className="btn btn-primary btn-wide bg-primary align-middle mt-6 ml-20" onClick={configureMoonbaseAlpha}>
              CONNECT
            </label> : <button className="btn btn-primary btn-wide bg-primary align-middle mt-6 ml-20" onClick={disconnectMetamask}>
              DISCONNECT
            </button>} 
          </div>

          <div className="modal-action">
            <label htmlFor="metamaskModal" className="btn">
              Dismiss
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
