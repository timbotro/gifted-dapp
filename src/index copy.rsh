"reach 0.1";

const common = {
  funded: Fun([], Null),
  informTimeout: Fun([], Null),
  informRedeemed: Fun([UInt], Null),
  // checkView: Fun([T], Null)
};

export const main = Reach.App(() => {
  const Gifter = Participant("Gifter", {
    ...common,
    getParams: Object({
      recipient: Address,
      payment: UInt,
      maturity: UInt,
    }),
    pass: UInt,
  });
  const Recipient = Participant("Recipient", {
    ...common,
    pass: UInt,
  });
  const vTimeleft = View("Timeleft", { timeleft: UInt });
  const vCreated = View("Created", { created: UInt });
  const vRecipient = View("Giftee", { recipient: Address });
  init();
  Gifter.only(() => {
    const { recipient, payment, maturity } = declassify(interact.getParams);
    const _pass = interact.pass;
    const passDigest = declassify(digest(_pass));
  });
  Gifter.publish(recipient, payment, maturity, passDigest).pay(payment);
  Recipient.set(recipient);

  each([Gifter, Recipient], () => {
    interact.funded();
  });

  vRecipient.recipient.set(recipient);
  vCreated.created.set(thisConsensusTime());

  // var thisTime = 0
  // invariant(balance() == payment)
  // while(thisTime < finalTime){

  //   const [
  //     lastPrice,
  //     isFirstBid,
  // ] = parallelReduce(true)
  //     .define(() => {
  //       V.currentBid.set(lastPrice);
  //     })
  //     .invariant(balance(nftId) == amt)
  //     .invariant(balance() == (isFirstBid ? 0 : lastPrice))
  //     .while(lastConsensusTime() <= end)

  commit();
  const endTime = lastConsensusTime() + maturity;

  const [timeleft] = parallelReduce([endTime])
    .define(()=>{vTimeleft.timeleft.set(timeleft)})
    .invariant(balance() == payment)
    .while(lastConsensusTime() <= end)
    .timeout(absoluteTime(endTime), () => {
      Creator.publish();
      return [timeleft];
    });

  //   thisTime = thisConsensusTime()
  //   vTimeleft.timeleft.set(timeleft);
  //   wait(absoluteTime(1))
  //   continue
  // }

  unknowable(Recipient, Gifter(_pass));

  // wait(relativeTime(maturity));
  Recipient.only(() => {
    const pass = declassify(interact.pass);
    assume(passDigest == digest(pass));
  });

  const informTimeout = () => {
    each([Gifter, Recipient], () => {
      interact.informTimeout();
    });
  };

  Recipient.publish(pass); //.timeout(relativeTime(maturity+5), () => closeTo(Gifter, informTimeout));
  require(passDigest == digest(pass));
  transfer(payment).to(Recipient);
  commit();

  each([Gifter, Recipient], () => {
    interact.informRedeemed(payment);
  });

  exit();
});
