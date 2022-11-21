import React, { useState, useEffect } from "react";
import { decodeGiftCode } from "../util/utils";
import * as backend from "../build/index.main.mjs";
import ClaimWaitingModal from "./modals/ClaimWaitingModal";
import { isAddress } from "ethers/lib/utils";

export default function Recipient(props) {
  const [giftcode, setGiftcode] = useState("");
  const [ctc, setCtc] = useState({});
  const [codeValidity, setCodeValidity] = useState(false);
  const [account, setAccount] = useState();
  const [isValidAddress, setIsValidAddress] = useState();
  const [isEmptyContract, setIsEmptyContract] = useState();
  const [isClaimed, setIsClaimed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false)
  const styles = {
    address: "input input-bordered w-full text-sm",
    invalidAddress: "input input-bordered input-error w-full text-sm",
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
    backend.Recipient(ctc, { pass, funded, informRedeemed });
  };

  useEffect(() => {
    const getAccount = async () => {
      const acc = await reach.getDefaultAccount();
      const account = acc.getAddress();
      setAccount(account);
    };

    getAccount();
  }, [reach]);

  useEffect(() => {
    const timbo = async () => {
      setIsLoaded(false)
      const { address } = decodeGiftCode(giftcode);
      const acc = await reach.getDefaultAccount();
      const ctc = acc.contract(backend, address);
      

      try{
        const recipient = await ctc.unsafeViews.Giftee.recipient();
        console.log("recipient is " + recipient);
        setIsValidAddress(recipient === await acc.getAddress());
        const created = await ctc.unsafeViews.Created.created();
        const contractBal = await reach.balanceOf(address);
        const maturity = await ctc.unsafeViews.Maturity.maturity();
        const currentTime = await reach.getNetworkTime();
        const timeleft = Number(created) + Number(maturity) - Number(currentTime);
        console.log("maturity is " + maturity);
        console.log("Creation time :" + created);
        console.log("acc is " + await acc.getAddress());
        
        console.log(reach);
        console.log("Current network time: " + currentTime);
        console.log("contract balance is : " + contractBal);
        console.log("time left is : " + timeleft);
        setIsEmptyContract(contractBal > 0);
        setTimeLeft(timeleft);
        setCtc(ctc);
        setIsClaimed(false)
        setIsLoaded(true)
      } catch (e){
        console.error("error is" + e.toString())
        if (e.toString().includes("View Giftee.recipient is not set")){
          setIsClaimed(true)
          setIsLoaded(true)
        }
      }



    };

    // if (giftcode.length < 40 || isValid()) {
    if (isValid()) {
      setCodeValidity(true);
      timbo();
    } else {
      setCodeValidity(false);
    }
  }, [giftcode, props.state.reach]);

  const displayCountDown = () => {
    if (codeValidity && account && !isClaimed && isLoaded && isValidAddress) {
      if (timeLeft <= 0) {
        return (
          <div className="alert alert-success shadow-lg">
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
              <span>The opening time has elapsed! 🌟</span>
            </div>
          </div>
        );
      } else {
        const milliseconds = timeLeft * 12 * 1000;
        const currentTime = Date.now();
        const futureDate = currentTime + milliseconds;
        const date = new Date(futureDate);

        return (
          <div className="alert alert-warning shadow-lg">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>This present can be opened at:</span>
              <span className="badge">
                {date.getHours() +
                  ":" +
                  (date.getMinutes()+1) +
                  `   ` +
                  date.toDateString()}
              </span>
            </div>
          </div>
        );
      }
    }
  };

  const displayAddressMatch = () => {
    if (codeValidity && account && !isClaimed && isLoaded) {
      if (isValidAddress) {
        return (
          <div className="alert alert-success shadow-lg">
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
              <span>This gift is for you! 🌟</span>
            </div>
          </div>
        );
      } else {
        return (
          <div className="alert alert-error shadow-lg">
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
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Sorry, this gift is not for you!</span>
            </div>
          </div>
        );
      }
    }
  };

  const displayHasBalance = () => {
    if (codeValidity && isLoaded ) {
      if (!isClaimed) {
        return (
          <div className="alert alert-success shadow-lg">
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
              <span>This gift is unclaimed! 🌟</span>
            </div>
          </div>
        );
      } else {
        return (
          <div className="alert alert-error shadow-lg">
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
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Sorry, this gift been claimed or does not exist.</span>
            </div>
          </div>
        );
      }
    }
  };

  const canSubmit = () => {
    const valid = codeValidity;
    if (valid && isEmptyContract && (timeLeft <= 0)) {
      return (
        <label
          htmlFor="claim-waiting-modal"
          className="btn btn-primary bg-center col-span-1 form-control drop-shadow-md"
          onClick={unwrap}
        >
          Unwrap Present
        </label>
      );
    } else {
      return (
        <label
          className="btn btn-primary bg-center col-span-1 form-control drop-shadow-md"
          disabled={true}
        >
         Cannot Unwrap
        </label>
      );
    }
  };

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
        <div className="grid grid-cols-1 gap-4">
          <div className="form-control col-span-1">
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

          <div className="">{displayAddressMatch()}</div>
          <div className="">{displayHasBalance()}</div>
          <div>{displayCountDown()}</div>
          {canSubmit()}

          <ClaimWaitingModal state={props.state} setClaim={props.state.setClaim} setGiftcode={setGiftcode} ctc={ctc} />
        </div>
      </form>
    </div>
  );
}
