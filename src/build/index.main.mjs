// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  const Giftee_recipient = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v107, v108, v109, v110, v115, v122] = svs;
      return (await ((async () => {
        
        
        return v107;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Timeleft_timeleft = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v107, v108, v109, v110, v115, v122] = svs;
      return (await ((async () => {
        
        
        return v109;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Giftee: {
        recipient: {
          decode: Giftee_recipient,
          dom: [],
          rng: ctc0
          }
        },
      Timeleft: {
        timeleft: {
          decode: Timeleft_timeleft,
          dom: [],
          rng: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Gifter(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Gifter expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Gifter expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Object({
    maturity: ctc0,
    payment: ctc0,
    recipient: ctc1
    });
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  
  
  const v94 = stdlib.protect(ctc2, interact.getParams, 'for Gifter\'s interact field getParams');
  const v95 = v94.maturity;
  const v96 = v94.payment;
  const v97 = v94.recipient;
  const v98 = stdlib.protect(ctc0, interact.pass, 'for Gifter\'s interact field pass');
  
  const v105 = stdlib.digest([ctc0], [v98]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v97, v96, v95, v105],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc3],
    pay: [v96, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v107, v108, v109, v110], secs: v112, time: v111, didSend: v41, from: v106 } = txn1;
      
      sim_r.txns.push({
        amt: v108,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v115 = v107;
      const v122 = stdlib.safeAdd(v111, v109);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v107, v108, v109, v110], secs: v112, time: v111, didSend: v41, from: v106 } = txn1;
  ;
  const v115 = v107;
  const v122 = stdlib.safeAdd(v111, v109);
  stdlib.protect(ctc4, await interact.funded(), {
    at: './index.rsh:41:20:application',
    fs: ['at ./index.rsh:40:7:application call to [unknown function] (defined at: ./index.rsh:40:32:function exp)'],
    msg: 'funded',
    who: 'Gifter'
    });
  
  await ctc.waitUntilTime(v122);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v133], secs: v135, time: v134, didSend: v71, from: v132 } = txn2;
  ;
  const v136 = stdlib.addressEq(v115, v132);
  stdlib.assert(v136, {
    at: './index.rsh:57:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Gifter'
    });
  const v137 = stdlib.digest([ctc0], [v133]);
  const v138 = stdlib.digestEq(v110, v137);
  stdlib.assert(v138, {
    at: './index.rsh:58:10:application',
    fs: [],
    msg: null,
    who: 'Gifter'
    });
  ;
  stdlib.protect(ctc4, await interact.informRedeemed(v108), {
    at: './index.rsh:63:28:application',
    fs: ['at ./index.rsh:62:7:application call to [unknown function] (defined at: ./index.rsh:62:32:function exp)'],
    msg: 'informRedeemed',
    who: 'Gifter'
    });
  
  return;
  
  
  
  
  };
export async function Recipient(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Recipient expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Recipient expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  
  
  const v99 = stdlib.protect(ctc0, interact.pass, 'for Recipient\'s interact field pass');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc1, ctc0, ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v107, v108, v109, v110], secs: v112, time: v111, didSend: v41, from: v106 } = txn1;
  ;
  const v115 = ctc.iam(v107);
  const v122 = stdlib.safeAdd(v111, v109);
  stdlib.protect(ctc3, await interact.funded(), {
    at: './index.rsh:41:20:application',
    fs: ['at ./index.rsh:40:7:application call to [unknown function] (defined at: ./index.rsh:40:32:function exp)'],
    msg: 'funded',
    who: 'Recipient'
    });
  
  await ctc.waitUntilTime(v122);
  const v130 = stdlib.digest([ctc0], [v99]);
  const v131 = stdlib.digestEq(v110, v130);
  stdlib.assert(v131, {
    at: './index.rsh:48:11:application',
    fs: ['at ./index.rsh:46:17:application call to [unknown function] (defined at: ./index.rsh:46:21:function exp)'],
    msg: null,
    who: 'Recipient'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v107, v108, v109, v110, v115, v122, v99],
    evt_cnt: 1,
    funcNum: 1,
    lct: v111,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v133], secs: v135, time: v134, didSend: v71, from: v132 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v115,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc2, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v133], secs: v135, time: v134, didSend: v71, from: v132 } = txn2;
  ;
  const v136 = stdlib.addressEq(v115, v132);
  stdlib.assert(v136, {
    at: './index.rsh:57:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Recipient'
    });
  const v137 = stdlib.digest([ctc0], [v133]);
  const v138 = stdlib.digestEq(v110, v137);
  stdlib.assert(v138, {
    at: './index.rsh:58:10:application',
    fs: [],
    msg: null,
    who: 'Recipient'
    });
  ;
  stdlib.protect(ctc3, await interact.informRedeemed(v108), {
    at: './index.rsh:63:28:application',
    fs: ['at ./index.rsh:62:7:application call to [unknown function] (defined at: ./index.rsh:62:32:function exp)'],
    msg: 'informRedeemed',
    who: 'Recipient'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`Giftee_recipient()address`, `Timeleft_timeleft()uint64`],
    sigs: [`Giftee_recipient()address`, `Timeleft_timeleft()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAEAAGgg6+RDyAmAgEAACI1ADEYQQGNKWRJIls1AYEIWzUCNhoAF0lBADsiNQQjNQZJJAxAABUkEkQ0ASMSRChkSTUDVwAgNQdCAVCBjdmW1gkSRDQBIxJEKGRJNQNXKAg1B0IBNjYaAhc1BDYaAzYaARdJIwxAAGAjEkQjNAESRDQESSISTDQCEhFEKGRJNQNJV1AgNf+BcFs1/kk1BRc1/YAE1RUZFDT9FlCwMgY0/g9ENP8xABJENANXMCA0/RYBEkSxIrIBNAMlW7III7IQNP+yB7NCAHtIgaCNBogA4SI0ARJENARJIhJMNAISEURJNQVJSlcAIDX/JVs1/oEoWzX9VzAgNfyABL0nHlw0/1A0/hZQNP0WUDT8ULA0/ogAnzT/NfsyBjT9CDX6NP80/hZQNP0WUDT8UDT7UDT6FlAoSwFXAHhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 120,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T2","name":"v186","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Giftee_recipient","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Timeleft_timeleft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"v188","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f610aa338819003918201601f19168301916001600160401b038311848410176103e05780849260a0946040528339810103126103f6576040519060a082016001600160401b038111838210176103e057604052805182526020810151906001600160a01b03821682036103f6576080916020840152604081015160408401526060810151606084015201516080820152436003556040516060810181811060018060401b038211176103e05760009160409182528281528260208201520152604051906040820182811060018060401b038211176103e057604052600082526000602083015260ff6004541661044f577fe29e3d6fc3d8a76bea7703913ed0f9e529edcc20b9e5a9b7b84ffa4b21f79e6f60c06040513381528351602082015260018060a01b0360208501511660408201526040840151606082015260608401516080820152608084015160a0820152a180518015908115610443575b501561042a57604081015134036104115760208101516001600160a01b031682526060810151439081019081106103fb574381106103f65760208301526040519160c08301906001600160401b038211848310176103e05760409182526000808552602085810182815286850183815260608089018581526080808b0187815260a0808d018981528c8901516001600160a01b039081169e8f90528d8d015189528d87015188529c84015185528a518d168352998801518a526001988990554389558a519788019c909c529451988601989098529151908401525194820194909452925190931693820193909352915160c08084019190915282529060e081016001600160401b038111828210176103e0576040528051906001600160401b0382116103e0576002548381811c911680156103d6575b60208210146103c057601f8111610358575b50602090601f83116001146102f2579282939183926000946102e7575b50501b916000199060031b1c1916176002555b60405161063a90816104698239f35b0151925038806102c5565b90601f1983169160026000528360206000209360005b8782821061033f57505010610326575b505050811b016002556102d8565b015160001960f88460031b161c19169055388080610318565b8486015187559095019460209485019487935001610308565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f840160051c810191602085106103b6575b601f0160051c019084905b8281106103aa5750506102a8565b6000815501849061039c565b9091508190610391565b634e487b7160e01b600052602260045260246000fd5b90607f1690610296565b634e487b7160e01b600052604160045260246000fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b90506001541438610160565b60405163100960cb60e01b815260096004820152602490fdfe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c806313777274146101eb5780631e93b0f1146101cc5780635dee56871461015e578063832307571461013f578063ab53f2c6146100d35763bff415871461006b5750610010565b346100cf57816003193601126100cf576001610085610575565b9254036100b8576020838084816100ab61009d610498565b8680825183010191016105bd565b0151928391015251908152f35b602490600884519163100960cb60e01b8352820152fd5b5080fd5b8284346100cf57816003193601126100cf5781546100ef610498565b91805193849283526020828185015284518093850152815b83811061012857505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610107565b8284346100cf57816003193601126100cf576020906001549051908152f35b50346100cf57816003193601126100cf576001610179610575565b9254036101b557602080848461018d610498565b80516001600160a01b03916101a891810186019086016105bd565b5116928391015251908152f35b602490600784519163100960cb60e01b8352820152fd5b8284346100cf57816003193601126100cf576020906003549051908152f35b5091806003193601126100cf57610200610575565b5080516001600160401b03908083018281118282101761044b578352843581526020948582019060248035835260ff825416610436577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639246060875133815286518b820152855189820152a1600194858854036104205761028f610281610498565b8a80825183010191016105bd565b94518015908115610415575b50156103ff5760a085015143106103e957346103d357608085019260018060a01b03943386865116036103bd57606087015190518951928c84019182528c84528a840194848610908611176103ab5750838a52825190200361039857505050858093888294839451169101519082821561038f575bf1156103845782805582815561032760025461045e565b80610335575b505051908152f35b601f811160011461034e575050816002555b388061032d565b6002845281601f868620920160051c820191015b81811061037a57505050818381208160025555610347565b8481558201610362565b5051903d90823e3d90fd5b506108fc610310565b604460129163100960cb60e01b84520152fd5b634e487b7160e01b8c5260419052848bfd5b885163100960cb60e01b81526011818401528490fd5b5090601086519163100960cb60e01b8352820152fd5b5090600f86519163100960cb60e01b8352820152fd5b5090600e86519163100960cb60e01b8352820152fd5b90508654143861029b565b5090600d86519163100960cb60e01b8352820152fd5b90600c86519163100960cb60e01b8352820152fd5b634e487b7160e01b855260418652602485fd5b90600182811c9216801561048e575b602083101461047857565b634e487b7160e01b600052602260045260246000fd5b91607f169161046d565b6040519060006002546104aa8161045e565b80855260019180831690811561055657506001146104fe575b5050829003601f01601f191682016001600160401b038111838210176104e857604052565b634e487b7160e01b600052604160045260246000fd5b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b838510610542575050505083010138806104c3565b80548886018301529301928490820161052d565b919250506020925060ff191682850152151560051b83010138806104c3565b60405190606082016001600160401b038111838210176104e85760405260006040838281528260208201520152565b51906001600160a01b03821682036105b857565b600080fd5b908160c09103126105b8576040519060c08201906001600160401b038211838310176104e85760a0916040526105f2816105a4565b835260208101516020840152604081015160408401526060810151606084015261061e608082016105a4565b6080840152015160a08201529056fea164736f6c6343000810000a`,
  BytecodeLen: 2723,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:36:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:60:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Gifter": Gifter,
  "Recipient": Recipient
  };
export const _APIs = {
  };
