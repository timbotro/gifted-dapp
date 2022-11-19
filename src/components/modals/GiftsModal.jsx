import React from 'react'

export default function GiftsModal() {
  return (
    <div>
      <input type="checkbox" id="giftsModal" className="modal-toggle" />
      <div className="modal text text-neutral-focus">
        <div className="modal-box base-300">
          <h3 className="font-bold text-lg">These are your gifts that you sent!!!</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="giftsModal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
