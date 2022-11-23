import React from "react";

export default function WorksModal() {
  return (
    <div>
      <input type="checkbox" id="worksModal" className="modal-toggle" />
      <label htmlFor="worksModal" className="modal cursor-pointer">
        {/* <div className="modal"> */}
          <div className="modal-box base-300 bg-base-100 w-11/12 max-w-5xl pb-10">
            <h3 className="font-extrabold text-transparent pt-7 pb-4 text-3xl bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500 w-fit">
              HOW IT WORKS
            </h3>

            <div className="flex w-auto gap drop-shadow-2xl">
              <div className="card w-96 bg-primary text-primary-content shadow-xl">
                <div className="card-body">
                  <h2 className="card-title font-extrabold text-primary-content">
                    DEPLOY GIFT 🚀
                  </h2>
                  <p>
                    {" "}
                    Choose the parameters of the gift you would like to send to
                    someone, and deploy it as a new smart contract on the
                    blockchain 💻
                  </p>
                </div>
              </div>
              <div className="divider lg:divider-horizontal"></div>

              <div className="card w-96 shadow-xl text-secondary-content bg-secondary">
                <div className="card-body">
                  <h2 className="card-title font-extrabold">SEND CODE 📧</h2>
                  <p>
                    {" "}
                    Get the custom giftcode (which contains a contract address
                    and psuedo-random password), and give it to the recipient
                    off-chain, e.g SMS, Telegram, Birthday Card, carrier pigeon
                    🕊
                  </p>
                </div>
              </div>

              <div className="divider lg:divider-horizontal"></div>

              <div className="card w-96 bg-accent shadow-xl text-accent-content">
                <div className="card-body">
                  <h2 className="card-title font-extrabold">OPEN GIFT 🎊</h2>
                  <p>
                    {" "}
                    Recipient pastes the gift code in and can unwrap their
                    present. If they do not open it in time, it will
                    automatically get returned to sender.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="modal-action">
            <label htmlFor="worksModal" className="btn">
              Yay!
            </label>
          </div> */}
          </div>
        {/* </div> */}
      </label>
    </div>
  );
}
