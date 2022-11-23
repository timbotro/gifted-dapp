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
      timeout: UInt,
    }),
    pass: UInt,
  });
  const Recipient = Participant("Recipient", {
    ...common,
    pass: UInt,
  });
  const vMaturity = View("Maturity", { maturity: UInt });
  const vCreated = View("Created", { created: UInt });
  const vRecipient = View("Giftee", { recipient: Address });
  init();
  Gifter.only(() => {
    const { recipient, payment, maturity, timeout } = declassify(interact.getParams);
    const _pass = interact.pass;
    const passDigest = declassify(digest(_pass));
  });
  Gifter.publish(recipient, payment, maturity, passDigest, timeout).pay(payment);
  Recipient.set(recipient);

  each([Gifter, Recipient], () => {
    interact.funded();
  });

  vRecipient.recipient.set(recipient);
  vCreated.created.set(thisConsensusTime());
  vMaturity.maturity.set(maturity);  

  commit();


  unknowable(Recipient, Gifter(_pass));

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

  Recipient.publish(pass).timeout(relativeTime(timeout), () => closeTo(Gifter, informTimeout));
  require(passDigest == digest(pass));
  transfer(payment).to(Recipient);
  commit();

  each([Gifter, Recipient], () => {
    interact.informRedeemed(payment);
  });

  exit();
});
