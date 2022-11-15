import React, { useState } from "react";
import WorksModal from "./modals/WorksModal";
import { emojisplosion } from "emojisplosion";
import MetamaskModal from "./modals/MetamaskModal";

export default function Nav(props) {
  const [address, setAddress] = useState("")

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

  const connected = typeof(props.provider) === "undefined"

  return (
    <nav>
      <div className="navbar bg-neutral text-neutral-content row-span-full">
        <a className="normal-case text-xl flex-1">🎁 GIFTED</a>

        <label htmlFor="worksModal" className="btn">
          How it works
        </label>
        <WorksModal />

        <label htmlFor="metamaskModal" className="btn btn-main bg-green-500">
        {connected ? "Connect to Metamask" : address}
        </label>
        <MetamaskModal provider={props.provider} setProvider={props.setProvider} setAddress={setAddress}/>

        {/* <OnboardingButton /> */}
        {/* <button className="btn btn-main bg-green-500" onClick={configureMoonbaseAlpha}>
          
        </button> */}
      </div>
    </nav>
  );
}
