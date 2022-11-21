import React, { useState, useEffect } from "react";
import { decodeGiftCode } from "../util/utils";
import * as backend from "../build/index.main.mjs";
import ClaimWaitingModal from "./modals/ClaimWaitingModal";

export default function Recipient(props) {
  const [giftcode, setGiftcode] = useState("");
  const [ctc, setCtc] = useState({});
  const [codeValidity, setCodeValidity] = useState(false);
  const [isValidAddress, setIsValidAddress] = useState();
  const styles = {
    address: "input input-bordered w-full max-w-xs text-sm col-span-3",
    invalidAddress: "input input-bordered input-error w-full max-w-xs text-lg col-span-3",
  };

  const { reach, provider } = props.state;

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
    console.log("Funded Function fired!");
    props.state.setIsFunded(true);
  };

  // const informRedeemed = (input) => {
  //   console.log("Gift has been unwrapped!");
  //   console.log(input);
  //   // props.state.setRedeemed(true);
  //   setAmount(input)
  //   console.log(props.amount)
  // };

  const informRedeemed = (input) => {
    // console.log("Gift has been unwrapped!");
    // console.log(input);
    const amount = props.state.reach.formatCurrency(input, 4);
    props.state.setClaim({ redeemed: true, amount });
  };

  const unwrap = async () => {
    const { pass, address } = decodeGiftCode(giftcode);
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(backend, address);
    //  setTimeleft = await ctc.unsafeViews.timeleft()
    // console.log(await ctc.unsafeViews.Giftee.recipient())
    // setCtc(ctc)
    backend.Recipient(ctc, { pass, funded, informRedeemed });
  };

  const giftCodeValidation = () => {
    let errors = [];
    try {
      console.log("firing!");
      console.log(isAddressValid.recipient);
      console.log(isAddressValid.connected);
      if (isAddressValid.recipient !== isAddressValid.connected) {
        errors.push("Address invalid!");
      } else {
        errors.push("It's a match!");
      }
      return errors.map((a) => <div>{a}</div>);
    } catch (e) {
      // console.error(e);
    }
  };

  useEffect(() => {
    const timbo = async () => {
      const { address } = decodeGiftCode(giftcode);
      console.log(address);
      const acc = await reach.getDefaultAccount();
      const ctc = acc.contract(backend, address);
      const recipient = await ctc.unsafeViews.Giftee.recipient();
      console.log("maturity is " + (await ctc.unsafeViews.Timeleft.timeleft()));

      console.log("acc is " + acc.getAddress());
      console.log("recipient is " + recipient);

      setIsValidAddress(recipient === acc.getAddress());
      setCtc(ctc);
    };

    // if (giftcode.length < 40 || isValid()) {
      if ( isValid()) {
      timbo();
      setCodeValidity(true);
    } else {
      setCodeValidity(false);
    }
  }, [giftcode, props.state.reach]);

  const displayAddressMatch = () =>{

   if(codeValidity) {
    if (isValidAddress) {
      return <div>Matching Address</div>
    } else {
      return <div>Non-Matching address</div>
    }
   } 
  }



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
              className={ctc ? styles.address : styles.invalidAddress}
            />
            <label className="label">
              <span className="label-text-alt">
                {codeValidity ? "" : "Invalid/Incomplete GiftCode"}
              </span>
            </label>
          </div>

          {/**TODO:  Create a list of view function assertions  */}
          <div className="">
            {displayAddressMatch()}
          </div>

          <label
            htmlFor="claim-waiting-modal"
            className="btn btn-primary bg-center col-span-3 form-control drop-shadow-md"
            onClick={unwrap}
          >
            Unwrap Present
          </label>
          <ClaimWaitingModal state={props.state} ctc={ctc} />
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
