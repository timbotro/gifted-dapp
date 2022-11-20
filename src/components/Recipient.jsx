import React, { useState, useEffect } from "react";
import { decodeGiftCode } from "../util/utils";
import * as backend from "../build/index.main.mjs";
import ClaimWaitingModal from "./modals/ClaimWaitingModal";

export default function Recipient(props) {
  const [giftcode, setGiftcode] = useState("");
  const [payAmount, setAmount] = useState("")
  const [codeValidity, setCodeValidity] = useState(true);
  const styles = {
    address: "input input-bordered w-full max-w-xs text-sm",
    invalidAddress: "input input-bordered input-error w-full max-w-xs text-sm",
  };

  const { provider, reach } = props.state;

  const handleChange = (event) => {
    const noPunc = event.target.value
      .replace(/[,\/#!$£%\^&\*;:{'}=+<.>?@\[\]|\-"_`~()]/g, "")
      .replace(/\s{2,}/g, " ");
    setGiftcode(noPunc);
  };

  const isValid = () => {
    return (
      giftcode.length > 40 && !giftcode.includes("G", "H", "I", "J", "K") // use regex for non-hex letters
    );
  };

  const funded = () => {
    console.log("Funded Function fired!")
    props.state.setIsFunded(true)
  }

  // const informRedeemed = (input) => {
  //   console.log("Gift has been unwrapped!");
  //   console.log(input);
  //   // props.state.setRedeemed(true);
  //   setAmount(input)
  //   console.log(props.amount)
  // };

  const informRedeemed = (input) => {
    console.log("Gift has been unwrapped!");
    console.log(input);
    const amount = props.state.reach.formatCurrency(input, 4)
    props.state.setClaim({redeemed: true, amount });
  };

  const unwrap = async () => {
    const { pass, address } = decodeGiftCode(giftcode);
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(backend, address);
    backend.Recipient(ctc, { pass, funded, informRedeemed });
  };

  useEffect(() => {
    if (giftcode.length < 40 || isValid()) {
      setCodeValidity(true);
    } else {
      setCodeValidity(false);
    }
  }, [giftcode]);

  return (
    <div className="hero-content flex-col lg:flex-row shadow-xl bg-base-300 rounded-xl py-10 px-10 border-2 border-secondary m-30">
      <button
        className="btn btn-outline btn-accent align-top"
        onClick={() => props.back("choice")}
      >
        BACK
      </button>
      <form className="">
        <h1 className="text-5xl font-bold text-focus">Open a present 🎁</h1>
        <div className="divider"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">Enter your Gift code</span>
              <span className="label-text-alt">(e.g. 233...3ABBD3 )</span>
            </label>
            <input
              type="text"
              value={giftcode}
              onChange={handleChange}
              placeholder="Type here"
              className={codeValidity ? styles.address : styles.invalidAddress}
            />
            <label className="label">
              <span className="label-text-alt">
                {codeValidity ? "" : "Invalid GiftCode"}
              </span>
            </label>
          </div>
          <label htmlFor="claim-waiting-modal" className="btn btn-primary bg-center col-span-3 form-control drop-shadow-md" onClick={unwrap}>Unwrap Present</label>
          <ClaimWaitingModal state={props.state}/>
          {/* <div
            className="btn btn-primary bg-center col-span-3 form-control"
            onClick={unwrap}
          >
            Unwrap
          </div> */}
        </div>
      </form>

      
    </div>
  );
}
