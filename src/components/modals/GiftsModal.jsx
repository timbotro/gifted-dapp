import React, { useState, useEffect } from "react";

export default function GiftsModal(props) {
  const [gifts, setGifts] = useState([
    { receipient: "", amount: "", timeout: "", giftCode: "" },
  ]);

  useEffect(() => {
    const retrieve = () => {
      const local = JSON.parse(localStorage.getItem(props.state.address));
      setGifts(local);
    };

    retrieve();
  }, [props.state.address, props.state.isFunded]);

  const getGifts = () => {
    const giftsList = gifts.map((a, index) => {
      return (
        <tr key={index}>
          <th>{index}</th>
          <td>{a.receipient}</td>
          <td>{a.amount}</td>
          <td>{a.giftCode}</td>
          <td>{a.maturity}</td>
        </tr>
      );
    });
    return (
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Recipient</th>
              <th>Amount</th>
              <th>GiftCode</th>
              <th>Opens in Block</th>
            </tr>
          </thead>
          <tbody>
            {giftsList}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <input type="checkbox" id="giftsModal" className="modal-toggle" />

      <div className="modal text text-neutral-focus">
        <div className="modal-box base-300 bg-base-100 w-11/12 max-w-5xl">
        <h3 className="font-extrabold text-transparent  pb-4 text-3xl bg-clip-text bg-gradient-to-r from-teal-500 to-pink-500 w-fit">
              MY SENT GIFTS
            </h3>
          {gifts ? (
            getGifts()
          ) : (
            <div className="alert alert-info">
              No Gifts sent from this address!
            </div>
          )}
          <div className="modal-action">
            <label htmlFor="giftsModal" className="btn btn-primary">
              X
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
