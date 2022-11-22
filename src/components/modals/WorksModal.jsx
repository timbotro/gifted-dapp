import React from "react";

export default function WorksModal() {
  return (
    <div>
      <input type="checkbox" id="worksModal" className="modal-toggle" />
      <div className="modal text text-neutral-focus">
        <div className="modal-box base-300 bg-base-100">
          <h3 className="font-extrabold text-transparent py-7 text-3xl bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500">
            HOW IT WORKS{" "}
          </h3>

          <div className="flex w-full">
            <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center gap-2">
              <div className="text-xl font-extrabold">SEND GIFT</div>
              <div className="px-3 font-semibold">
                explain about sending a gift
              </div>
            </div>
            <div className="divider divider-horizontal">➡️</div>
            <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center">
              <div className="text-xl font-extrabold">SEND GIFT</div>
              <div className="px-3 font-semibold">
                explain about sending a gift
              </div>
            </div>
            <div className="divider divider-horizontal">➡️</div>
            <div className="grid h-40 flex-grow card bg-base-300 rounded-box place-items-center">
              <div className="text-xl font-extrabold">SEND GIFT</div>
              <div className="px-3 font-semibold">
                explain about sending a gift
              </div>
            </div>
          </div>

          <div className="modal-action">
            <label htmlFor="worksModal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
