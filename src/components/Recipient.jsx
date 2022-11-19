import React, {useState} from "react";

export default function Recipient(props) {
  return (
    <div className="hero-content flex-col lg:flex-row shadow-xl bg-base-300 rounded-xl py-10 px-10 border-2 border-secondary m-30">
      <button className="btn btn-outline btn-accent align-top" onClick={() => props.back("choice")}>
        BACK
      </button>
      <form className="">
        <h1 className="text-5xl font-bold text-focus">Open a present 🎁</h1>
        <div className="divider"></div> 
        <div className="grid grid-cols-3 gap-4">
          <div className="form-control col-span-3">
            <label className="label">
              <span className="label-text">What is the Gift code?</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered  col-span-3" />
            <label className="label">
              <span className="label-text-alt">(e.g. 0xAB3...3DFF213 )</span>
            </label>
          </div>
          <div className="btn btn-primary bg-center col-span-3 form-control" onClick={() => props.back("choice")}>
            SEND GIFTa
          </div>
        </div>
      </form>
    </div>
  );
}
