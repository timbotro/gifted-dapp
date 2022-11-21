import React from "react";

export default function WorksModal() {
  return (
    <div>
      <input type="checkbox" id="worksModal" className="modal-toggle" />
      <div className="modal text text-neutral-focus">
        <div className="modal-box base-300">
          <h3 className="font-bold text-lg">TODO </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to use Wikipedia for free!
          </p>
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
