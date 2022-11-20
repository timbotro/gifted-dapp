import React, { useState, useEffect, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { emojisplosion } from "emojisplosion";
import { sleep } from "../../util/utils";
import {ethers} from "ethers"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function ClaimWaitingModal(props) {
  const explode = () => {
    emojisplosion({
      emojiCount: 101,
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
  };

  const progressSpinner = () => {
    return (
      <div>
        <h3 className="text-xl font-bold drop-shadow-sm">
          Claiming gift from the blockchain,
        </h3>
        <h3 className="text-xl drop-shadow-sm">waiting for confirmation</h3>
        <div className="sweet-loading py-10 px-10">
          {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */}
          {/* <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        /> */}

          <ClipLoader
            color="#123234"
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
    console.log(amount)
    console.log("converted to" + props.state.reach.formatCurrency(amount,18))
    return props.state.reach.formatCurrency(amount,18)
  }


  const redeemed = () => {
    explode();
    return (
      <div className="grid grid-cols-1 gap-5">
        <h1 className="text-xl font-bold col-span-1">
          🎉 Present has been unwrapped 🎉
        </h1>
        <h2 className="text-base col-span-1">
          {" "}
          Please note down the following code and send to the recepient:
        </h2>
        <div className="alert alert-success shadow-lg font-bold text-base text-slate">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className=""> {convertAmount(props.amount)}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <input type="checkbox" id="claim-waiting-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  min-w-max">
          <label
            htmlFor="claim-waiting-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {props.state.redeemed ? redeemed() : progressSpinner()}
        </div>
      </div>
    </div>
  );
}
