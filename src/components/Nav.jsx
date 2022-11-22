import React, { useState, useEffect } from "react";
import WorksModal from "./modals/WorksModal";

import MetamaskModal from "./modals/MetamaskModal";
import GiftsModal from "./modals/GiftsModal";

export default function Nav(props) {
  const [address, setAddress] = useState("");
  const [truncAddr, setTruncAddr] = useState("");

  const disconnected = typeof props.provider === "undefined";

  useEffect(() => {
    if (address !== ""){
      const trunc0 = address[0].slice(0, 6);
      const trunc1 = address[0].slice(address.length - 6);
      setTruncAddr(trunc0 + "...." + trunc1);
    }
  }, [address]);

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
        <GiftsModal />

        <label htmlFor="metamaskModal" className="btn btn-focus drop-shadow-lg">
          {disconnected ? "Connect to Metamask" : truncAddr}
        </label>
        <MetamaskModal
          provider={props.provider}
          setProvider={props.setProvider}
          setAddress={setAddress}
        />
      </div>
    </nav>
  );
}
