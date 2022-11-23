import React, { useState, useEffect } from "react";
import WorksModal from "./modals/WorksModal";

import MetamaskModal from "./modals/MetamaskModal";
import GiftsModal from "./modals/GiftsModal";

export default function Nav(props) {
  const [truncAddr, setTruncAddr] = useState("");

  const disconnected = typeof props.provider === "undefined";

  useEffect(() => {
    if (props.state.address !== ""){
      const trunc0 = props.state.address[0].slice(0, 6);
      const trunc1 = props.state.address[0].slice(props.state.address.length - 6);
      setTruncAddr(trunc0 + "...." + trunc1);
    }
  }, [props.state.address]);

  return (
    <nav className="">
      <div className="navbar bg-primary text-primary-content row-span-full gap-2">
        <a className="normal-case text-4xl text-secondary-focus font-extrabold flex-1">🎁 GIFTED</a>

        <label
          htmlFor="worksModal"
          className="btn btn-secondary drop-shadow-lg"
        >
          How it works
        </label>
        <WorksModal />

        <label
          htmlFor="giftsModal"
          className="btn btn-secondary drop-shadow-lg"
        >
          My Sent Gifts
        </label>
        <GiftsModal state={props.state}/>

        <label htmlFor="metamaskModal" className="btn btn-focus drop-shadow-lg">
          {disconnected ? "Connect to Metamask" : truncAddr}
        </label>
        <MetamaskModal
          provider={props.provider}
          setProvider={props.setProvider}
          setAddress={props.state.setAddress}
        />
      </div>
    </nav>
  );
}
