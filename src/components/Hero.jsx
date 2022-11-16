import React from "react";

export default function Hero() {
  return (
    <div className="hero  min-h-full bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse shadow-xl bg-base-300 rounded-xl py-10 px-10 border-2 border-secondary m-30">
        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl " />
        <div className="">
          <h1 className="text-5xl font-bold text-focus">GIVE CRYPTO 🪙</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="flex w-full mt-10">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              <button className="btn btn-primary btn-wide">Giving</button>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              <button className="btn btn-secondary btn-wide">Receiving</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
