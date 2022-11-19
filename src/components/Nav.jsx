import React, { useState } from "react";
import WorksModal from "./modals/WorksModal";

import MetamaskModal from "./modals/MetamaskModal";
import GiftsModal from "./modals/GiftsModal";

export default function Nav(props) {
  const [address, setAddress] = useState("");

  const disconnected = typeof props.provider === "undefined";
  console.log(disconnected);
  console.log("props.provider:   " + props.provider);

  return (
    <nav>
      <div className="navbar bg-primary text-primary-content row-span-full">
        <a className="normal-case text-xl flex-1">🎁 GIFTED</a>

        <label htmlFor="worksModal" className="btn btn-secondary">
          How it works
        </label>
        <WorksModal />

        <label htmlFor="giftsModal" className="btn btn-secondary">
          My Sent Gifts
        </label>
        <GiftsModal />

        <label htmlFor="metamaskModal" className="btn btn-focus">
          {disconnected ? "Connect to Metamask" : address}
        </label>
        <MetamaskModal provider={props.provider} setProvider={props.setProvider} setAddress={setAddress} />
      </div>
    </nav>
  );
}
