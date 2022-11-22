import React from "react";

export default function WorksModal() {
  return (
    <div>
      <input type="checkbox" id="worksModal" className="modal-toggle" />
      <div className="modal text">
        <div className="modal-box base-300 bg-base-100 ">
          <h3 className="font-extrabold text-transparent pt-7 pb-4 text-3xl bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500">
            HOW IT WORKS
          </h3>

          <div className="flex w-auto">
            <div className="grid flex-grow card h-60 bg-base-300 rounded-box place-items-center gap-2 drop-shadow-xl">
              <div className="text-xl px-5  h-60 font-extrabold text-primary">
                DEPLOY GIFT
              </div>
              <div className="px-5 h-60 font-semibold text-primary-content">
                Choose the parameters of the gift you would like to send to
                someone, and deploy it as a new smart contract on the blockchain
                💻
              </div>
            </div>
            <div className="divider divider-horizontal">➡️</div>
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
              <div className="text-xl font-extrabold text-secondary">
                SEND CODE
              </div>
              <div className="px-3 font-semibold text-secondary-content">
                Get the custom giftcode (which contains a contract address and
                psuedo-random password), and give it to the recipient off-chain,
                e.g SMS, Telegram, Birthday Card, carrier pigeon 🕊
              </div>
            </div>
            <div className="divider divider-horizontal">➡️</div>
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
              <div className="text-xl font-extrabold text-accent">
                OPEN GIFT
              </div>
              <div className="px-3 font-semibold text-accent-content">
                Recipient pastes the gift code in and can unwrap their present.
                If they do not open it in time, it will automatically get
                returned to sender.
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
