import React, { useRef, useState, useEffect } from "react";
import * as backend from "../build/index.main.mjs";
import {returnGiftCode, isValid} from "../util/utils"
import SentWaitingModal from "./modals/SentWaitingModal.jsx";


export default function Giver(props) {
  const [formdata, setFormdata] = useState({
    maturity: 0,
    address: "",
    timeout: 0,
    amount: 0
  });
  const [addressValidity, setAddressValidity] = useState(true);
  const [giftCode, setGiftCode] = useState("")
  const { provider, reach } = props.state;
  const submitbtn = useRef(null);
  const BLOCK_TIME = 12;

  const styles = {
    address: "input input-bordered w-full max-w-xs text-sm",
    invalidAddress: "input input-bordered input-error w-full max-w-xs text-sm",
  };



  const funded = () => {
    console.log("Funded Function fired!")
    props.state.setIsFunded(true)
  }

  const redeemed = (input) => {
    console.log("Gift has been unwrapped!");
    console.log(input);
    props.state.setRedeemed(true);
    setAmount(input)
  };


  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const sanitised = Math.max(Math.floor(value), 0);
    const noPunc = value
      .replace(/[,\/#!$£%\^&\*;:{}=+<>?@|\-"_`~()]/g, "")
      .replace(/\s{2,}/g, " ");

    setFormdata((prev) => {
      return {
        ...prev,
        [name]:
          name === "amount"
            ? value
            : type === "number"
            ? sanitised
            : name === "address"
            ? noPunc
            : value,
      };
    });
  };

  const calcTime = (blocks) => {
    const minutes = Math.max(0, (blocks * BLOCK_TIME) / 60).toFixed(1);
    switch (true) {
      case minutes > 60 * 24:
        return <>~ {(minutes / 60 / 24).toFixed(1)} days</>;
      case minutes > 60:
        return <>~ {(minutes / 60).toFixed(1)} hours</>;
      default:
        return <>~ {minutes} minutes</>;
    }
  };

  useEffect(() => {
    if (formdata.address.length < 3 || isValid(formdata.address)) {
      setAddressValidity(true);
    } else {
      setAddressValidity(false);
    }
  }, [formdata.address]);

//   useEffect(()=>{
//     console.log("TO BE SHARED with Recipient:  " + giftCode)
//   },[giftCode])
 

  const sendGift = async () => {
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(backend);
    const amt = reach.parseCurrency(formdata.amount);
    const psuedoRand = Math.floor(Math.random() * 10_000);
    const getParams = {
      recipient: formdata.address,
      payment: amt,
      maturity: formdata.maturity,
    };
    backend.Gifter(ctc, { getParams, pass: psuedoRand , funded, redeemed});


    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    const code = returnGiftCode(ctcInfoStr,psuedoRand.toString())
    setGiftCode(code)
  };
  //   useEffect(() => {
  //     const performReachCommands = async () => {
  //       const acc = await reach.getDefaultAccount();
  //       const balAtomic = await reach.balanceOf(acc);
  //       const bal = reach.formatCurrency(balAtomic, 4);

  //       console.log(`Acc is ${acc}`);
  //       console.log(`Acc is ${balAtomic}`);
  //       console.log(`Acc is ${bal}`);
  //     };
  //     performReachCommands();
  //   }, [reach]);

  return (
    <div className="hero-content flex-col lg:flex-row shadow-xl bg-base-300 rounded-xl py-10 px-10 border-2 border-secondary m-30">
      <button
        className="btn btn-outline btn-accent align-top"
        onClick={() => props.back("choice")}
      >
        BACK
      </button>
      <form className="">
        <h1 className="text-5xl font-bold text-focus">
          Send to Someone else 💸
        </h1>
        <div className="divider"></div>
        <div className="container m-auto grid grid-cols-2 gap-4">
          <div className="">
            <label className="label">
              <span className="label-text">When can the gift be opened?</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={formdata.maturity}
              onChange={handleChange}
              name="maturity"
            />
            <label className="label">
              <span></span>
              <span className="label-text-alt">
                Blocks ({calcTime(formdata.maturity)})
              </span>
            </label>
            <input
              type="range"
              name="maturity"
              min="0"
              max="72000"
              value={formdata.maturity}
              className="range range-xs"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">
                How long does recipient have to open present?
              </span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={formdata.timeout}
              onChange={handleChange}
              name="timeout"
            />
            <label className="label">
              <span></span>
              <span className="label-text-alt">
                Blocks ({calcTime(formdata.timeout)})
              </span>
            </label>
            <input
              type="range"
              name="timeout"
              min="0"
              max="72000"
              value={formdata.timeout}
              className="range range-xs"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  What is the recipient address?
                </span>
              </label>
              <input
                type="text"
                placeholder="0x..."
                className={
                  addressValidity ? styles.address : styles.invalidAddress
                }
                name="address"
                value={formdata.address}
                onChange={handleChange}
              />
              <label className="label">
                <span className="label-text-alt">
                  {addressValidity ? "" : "Invalid Address"}
                </span>
                <span className="label-text-alt">(e.g. 0xAB3...3DFF213 )</span>
              </label>
            </div>
          </div>
          <div className="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  How much ETH would you like to send?
                </span>
              </label>
              <input
                type="number"
                placeholder="0.01"
                min="0"
                name="amount"
                value={formdata.amount}
                onChange={handleChange}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span></span>
                <span className="label-text-alt">~ $0.02</span>
              </label>
              {/* <input type="range" min="0" max="100" value="40" className="range range-xs" /> */}
            </div>
          </div>

          <label htmlFor="sent-waiting-modal" className="btn btn-primary bg-center col-span-2 form-control drop-shadow-md" onClick={sendGift}>SEND GIFT 🚀</label>
          <SentWaitingModal state={props.state} code={giftCode}/>
        </div>
      </form>
    </div>
  );
}
