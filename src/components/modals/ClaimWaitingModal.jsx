import React, { useState, useEffect, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { emojisplosion, emojisplosions } from "emojisplosion";
import { sleep } from "../../util/utils";
import { ethers } from "ethers";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#0000000",
};

/// TODO:
/// store log of opened presents and from whom
/// Timeouts


export default function ClaimWaitingModal(props) {
  const explode = () => {
    const { cancel } = emojisplosion({
      emojiCount: 10,
      emojis: ["💍", "💎", "🪙", "💰️", "💵"],
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

    return cancel;
  };

  const progressSpinner = () => {
    return (
      <div>
        <h3 className="text-xl font-bold drop-shadow-sm">
          Claiming gift from the blockchain,
        </h3>
        <h3 className="text-xl drop-shadow-sm">waiting for confirmation</h3>
        <div className="sweet-loading py-10 px-10">

          <ClipLoader
            color="teal"
            loading={!props.state.redeemed}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  };

  const convertAmount = (amount) => {
    console.log("modal console logs");
    console.log(amount);
    console.log(props.amount);
    console.log(props.amount.toString());
    console.log(
      "converted to" +
        props.state.reach.formatCurrency(props.amount.toString(), 4)
    );
    return props.state.reach.formatCurrency(props.amount.toString(), 4);
  };

  const clearState = () => {
    props.setGiftcode("")
    props.setClaim({redeemed:false, amount:0})
  }

  const saveAndReset = () => {
    sessionStorage.setItem("sentGift", { code: props.code });
    props.state.setIsFunded(false);
  };

  const redeemed = () => {
    explode();
    explode();
    explode();
    explode();
    return (
      <div className="grid grid-cols-1 gap-5">
        <h1 className="text-xl font-bold col-span-1">
          🎉 Present has been successfully claimed 🎉
        </h1>
        <h2 className="text-base col-span-1"> You have just unwrapped:</h2>
        <div className="alert alert-success shadow-lg font-bold text-lg text-slate">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className=""> {props.state.claim.amount} ETH</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <input
        type="checkbox"
        id="claim-waiting-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative  min-w-max">
          <label
            htmlFor="claim-waiting-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={clearState}
          >
            ✕
          </label>
          {props.state.claim.redeemed === true ? redeemed() : progressSpinner()}
        </div>
      </div>
    </div>
  );
}
