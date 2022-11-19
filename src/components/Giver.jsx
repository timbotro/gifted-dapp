import React, { useRef, useState, useEffect } from "react";
import { emojisplosion } from "emojisplosion";

export default function Giver(props) {
  const [formdata, setFormdata] = useState({ maturity: 0, address: "" });
  const [addressValidity, setAddressValidity] = useState(true);
  const submitbtn = useRef(null);
  const BLOCK_TIME = 12;

  const styles = {
    address: "input input-bordered w-full max-w-xs",
    invalidAddress: "input input-bordered input-error w-full max-w-xs",
  };
  let validAddress = true;

  function explode() {
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
        position() {
          const offset = cumulativeOffset(submitbtn);

          return {
            x: offset.left + submitbtn.clientWidth / 2,
            y: offset.top + submitbtn.clientHeight / 2,
          };
        },
      },
    });
    console.log("exploded");
  }

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const sanitised = Math.max(Math.floor(value), 0);
    const noPunc = value .replace(/[.,\/#!$£%\^&\*;:{}=+<>?@|\-"_`~()]/g, "")
    .replace(/\s{2,}/g, " ")

    setFormdata((prev) => {
      return { ...prev, [name]: name === "maturity" ? sanitised : name ==="address"? noPunc:value };
    });
  };

  const calcTime = () => {
    const minutes = Math.max(0, (formdata.maturity * BLOCK_TIME) / 60).toFixed(1);
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
    console.log(formdata.address.slice(0, 3));

    const isValid = (string) => {
      const result = string.length === 42 && string.slice(0, 2) === "0x" && !(string.includes(":","'","\"","[","]"));
      return result;
    };

    if (formdata.address.length < 3 || isValid(formdata.address)) {
      setAddressValidity(true);
    } else {
      setAddressValidity(false);
    }
  }, [formdata.address]);

  return (
    <div className="hero-content flex-col lg:flex-row shadow-xl bg-base-300 rounded-xl py-10 px-10 border-2 border-secondary m-30">
      <button className="btn btn-outline btn-accent align-top" onClick={() => props.back("choice")}>
        BACK
      </button>
      <form className="">
        <h1 className="text-5xl font-bold text-focus">Send to Someone else 💸</h1>
        <div className="divider"></div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="label">
              <span className="label-text">After how many blocks can the gift be opened?</span>
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
              <span className="label-text-alt">Blocks ({calcTime()})</span>
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
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is the recipient address?</span>
              </label>
              <input
                type="text"
                placeholder="0x..."
                className={addressValidity ? styles.address : styles.invalidAddress}
                name="address"
                value={formdata.address}
                onChange={handleChange}
              />
              <label className="label">
                <span className="label-text-alt">{addressValidity ? "" : "Invalid Address"}</span>
                <span className="label-text-alt">(e.g. 0xAB3...3DFF213 )</span>
              </label>
            </div>
          </div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">How much ETH would you like to send?</span>
              </label>
              <input type="text" placeholder="0.01" className="input input-bordered w-full max-w-xs" />
              <label className="label">
                <span></span>
                <span className="label-text-alt">~ $0.02</span>
              </label>
              {/* <input type="range" min="0" max="100" value="40" className="range range-xs" /> */}
            </div>
          </div>
          <div ref={submitbtn} className="btn btn-primary bg-center col-span-3 form-control" onClick={explode}>
            SEND GIFTa
          </div>
        </div>
      </form>
    </div>
  );
}
