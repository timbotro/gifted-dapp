import React from "react";


export default function Hero() {
  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse shadow-xl bg-base-300 rounded-xl py-10 px-10">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold text-focus">GIVE CRYPTO 🪙</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
        <div className="grid-cols-2 grid gap-5 ml-10 mr-10 mt-10">
          <button className="btn btn-primary">Giving</button>
          <button className="btn btn-secondary">Receiving</button>
        </div>

          </div>
        </div>
      </div>
  );
}
