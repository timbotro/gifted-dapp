import React, { useState, useEffect, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { emojisplosion } from "emojisplosion";
import { sleep } from "../../util/utils";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

  /// TODO: implement cancel of explosions
  /// store log of opened presents and for whom
  /// Timeouts
  /// Maturity
  /// detecting if claimed already

export default function SentWaitingModal(props) {
  const inputEl = useRef(null);
  const explode = () => {
    emojisplosion({
      emojiCount: 101,
      emojis: ["🎁", "🎁", "🎁", "💝", "💝", "🎀"],
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

  const copyToClipboard = async (event) => {
    const button = inputEl.current;
    navigator.clipboard.writeText(props.code);
    const origInnerHTML = button.innerHTML;
    button.innerText = "Copied!";
    button.disabled = true;
    await sleep(1000);
    button.current = origInnerHTML;
    button.disabled = false;
  };

  const progressSpinner = () => {
    return (
      <div>
        <h3 className="text-xl font-bold drop-shadow-sm">
          Deploying gift to the blockchain,
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
            loading={!props.state.isFunded}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  };

  const saveAndReset = () => {
    sessionStorage.setItem("sentGift", { code: props.code });
    props.state.setIsFunded(false);
  };

  const funded = () => {
    explode();
    return (
      <div className="grid grid-cols-1 gap-5">
        <h1 className="text-xl font-bold col-span-1">
          🎉 Present has been sent! 🎉
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
            <span className="">{props.code}</span>
          </div>
          <div className="flex-none">
            <button
              onClick={copyToClipboard}
              ref={inputEl}
              className="btn btn-sm btn-primary"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <input type="checkbox" id="sent-waiting-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative  min-w-max">
          <label
            htmlFor="sent-waiting-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={saveAndReset}
          >
            ✕
          </label>

          {props.state.isFunded ? funded() : progressSpinner()}
        </div>
      </div>
    </div>
  );
}
