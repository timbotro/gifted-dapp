import React, { useEffect, CSSProperties } from "react";
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
          // await provider.request({
          //   method: "wallet_addEthereumChain",
          //   params: [
          //     {
          //       chainId: "0xaa36a7",
          //       chainName: "Sepolia",
          //       nativeCurrency: {
          //         name: "ETH",
          //         symbol: "ETH",
          //         decimals: 18,
          //       },
          //       rpcUrls: ["https://sepolia.infura.io/v3/"],
          //       blockExplorerUrls: ["https://sepolia.etherscan.io/"],
          //     },
          //   ],
          // });
          const chainId = await provider.request({
            method: "eth_chainId",
          });

          if (chainId === "0xaa36a7") {
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

  const disconnectMetamask = () => {
    props.setProvider("");
    window.location.reload();
  };

  const connected = typeof props.provider !== "undefined";

  return (
    <div>
      <input type="checkbox" id="metamaskModal" className="modal-toggle" />
      <div className="modal text text-neutral-focus gap-5">
        <div className="modal-box base-300 gap-4">
          <h3 className="font-bold text-lg">Connect to a Metamask Wallet</h3>

          <div className="grid grid-cols-2 gap-3">
            <div
              className="col-span-2 btn btn-primary bg-primary mt-8 mb-4"
              onClick={!connected ? configureMoonbaseAlpha : disconnectMetamask}
            >
              {!connected ? <>CONNECT</> : <>DISCONNECT</>}
            </div>
            <div className="alert alert-info shadow-lg">
              <a href="https://faucet.sepolia.dev/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Sepolia Faucet 1</span>
              </a>
            </div>

            <div className="alert alert-info shadow-lg">
              <a href="https://sepolia-faucet.pk910.de/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Sepolia Faucet 2</span>
              </a>
            </div>
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
