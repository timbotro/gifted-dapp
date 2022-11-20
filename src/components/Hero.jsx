import React, { useState, useEffect } from "react";
import heroImage from "../assets/heroImage.svg";
import Giver from "./Giver";
import Recipient from "./Recipient";

export default function Hero(props) {
  const [mode, setMode] = useState("choice");

  const choice = () => {
    return (
      <div className="hero-content flex-col lg:flex-row-reverse shadow-xl bg-base-300 rounded-xl py-10 px-10 border-2 border-secondary m-30  min-h-full">
        <img src={heroImage} className="max-w-sm rounded-lg " />
        <div className="">
          <h1 className="text-5xl font-bold text-focus">GIFTED CRYPTO 🪙</h1>
          <p className="py-6">
            Send the gift of time-locked cryptocurrency to someone! If they do not open their present, you can always refund it 
            back to your wallet.
          </p>
          <div className="flex w-full mt-10">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              <button className="btn btn-primary btn-wide" onClick={() => handleChange("giver")}>
                Giving
              </button>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              <button className="btn btn-secondary btn-wide" onClick={() => handleChange("recipient")}>
                Receiving
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleChange = (choice) => {
    setMode(choice);
  };

  return (
    <div className="hero  min-h-full bg-base-200">
      {mode === "giver" ? (
        <Giver state={props.state} back={handleChange} />
      ) : mode === "recipient" ? (
        <Recipient state={props.state} back={handleChange} />
      ) : (
        choice()
      )}
    </div>
  );
}
