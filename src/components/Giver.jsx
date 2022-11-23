import React, { useRef, useState, useEffect } from "react";
import * as backend from "../build/index.main.mjs";
import { returnGiftCode, isValid } from "../util/utils";
import SentWaitingModal from "./modals/SentWaitingModal.jsx";

export default function Giver(props) {
  const [formdata, setFormdata] = useState({
    maturity: 0,
    address: "",
    timeout: 0,
    amount: 0,
  });
  const [addressValidity, setAddressValidity] = useState(true);
  const [giftCode, setGiftCode] = useState("");
  const [price, setPrice] = useState("--");
  const [createdTime, setCreatedTime] = useState(0)
  const { provider, reach } = props.state;
  const submitbtn = useRef(null);
  const BLOCK_TIME = 12;

  const styles = {
    address: "input input-bordered w-full max-w-xs text-sm",
    invalidAddress: "input input-bordered input-error w-full max-w-xs text-sm",
  };

  const funded = () => {
    console.log("Funded Function fired!");
    props.state.setIsFunded(true);
  };

  const informRedeemed = (input) => {
    console.log("Gift has been unwrapped!");
    const amount = props.state.reach.formatCurrency(input, 4);
    props.state.setClaim({ redeemed: true, amount });
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

  useEffect(() => {
    const store = async () => {
      // console.log("created time is " +createdTime)
      const opensAt = Number(createdTime) + Number(formdata.maturity);
      
      const fetchedItems = JSON.parse(localStorage.getItem(props.state.address));
      const newItem = {
        receipient: formdata.address,
        amount: formdata.amount,
        maturity: opensAt,
        giftCode,
      };
      const items = fetchedItems === null ? [newItem] : [...fetchedItems, newItem]

      localStorage.setItem(
        props.state.address,
        JSON.stringify(items)
      );
    };
    if (props.state.isFunded === true) {
      store();
    }
  }, [props.state.isFunded]);

  useEffect(() => {
    const getPrice = async () => {
      try {
        const resp = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const price = (await resp.json()).ethereum.usd;
        setPrice(price);
      } catch (e) {
        console.log("Price Unavailable");
      }
    };

    getPrice();
  }, []);

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
    backend.Gifter(ctc, {
      getParams,
      pass: psuedoRand,
      funded,
      informRedeemed,
    });
    const created = await ctc.unsafeViews.Created.created();

    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    const code = returnGiftCode(ctcInfoStr, psuedoRand.toString());
    setGiftCode(code);
    setCreatedTime(created)
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
        <span className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500">
          Send to Someone else
        </span>
        <span className="text-5xl"> 💸</span>
        <div className="divider"></div>
        <div className="container m-auto grid grid-cols-2 gap-4">
          <div className="">
            <label className="label">
              <span className="label-text">When can the gift be opened?</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={formdata.maturity}
                onChange={handleChange}
                name="maturity"
              />
              <span className="bg-secondary text-sm font-bold">Blocks</span>
            </label>
            <label className="label">
              <span></span>
              <span className="label-text-alt">
                ({calcTime(formdata.maturity)})
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
            <label className="input-group">
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                value={formdata.timeout}
                onChange={handleChange}
                name="timeout"
              />
              <span className="bg-secondary text-sm font-bold">Blocks</span>
            </label>
            <label className="label">
              <span></span>
              <span className="label-text-alt">
                ({calcTime(formdata.timeout)})
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
                  How much would you like to send?
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="0.01"
                  min="0"
                  name="amount"
                  value={formdata.amount}
                  onChange={handleChange}
                  className="input input-bordered w-full max-w-xs"
                />
                <span className="bg-secondary text-sm font-bold">ETH</span>
              </label>

              <label className="label">
                <span></span>
                <span className="label-text-alt">
                  ~ ${(price * formdata.amount).toFixed(2)}
                </span>
              </label>
              {/* <input type="range" min="0" max="100" value="40" className="range range-xs" /> */}
            </div>
          </div>

          <label
            htmlFor="sent-waiting-modal"
            className="btn btn-primary bg-center col-span-2 form-control drop-shadow-md"
            onClick={sendGift}
          >
            SEND GIFT 🚀
          </label>
          <SentWaitingModal
            state={props.state}
            code={giftCode}
            setGiftCode={setGiftCode}
          />
        </div>
      </form>
    </div>
  );
}
