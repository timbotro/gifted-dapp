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
  const vTimeleft = View( "Timeleft",{timeleft: UInt})
  const vRecipient = View( "Giftee", {recipient: Address})
  init()
  Gifter.only(() => {
    const { recipient, payment, maturity } = declassify(interact.getParams);
    const _pass = interact.pass;
    const passDigest = declassify(digest(_pass));
  });
  Gifter.publish(recipient, payment, maturity, passDigest).pay(payment);
  Recipient.set(recipient);
  vRecipient.recipient.set(recipient)
  vTimeleft.timeleft.set(maturity)
  commit();

  unknowable(Recipient,Gifter(_pass))

  each([Gifter, Recipient], () => {
    interact.funded();
  });


  wait(relativeTime(maturity));
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
