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
  
  const Created_created = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v108, v109, v110, v111, v112, v116, v128] = svs;
      return (await ((async () => {
        
        
        return v112;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Giftee_recipient = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v108, v109, v110, v111, v112, v116, v128] = svs;
      return (await ((async () => {
        
        
        return v108;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Maturity_maturity = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v108, v109, v110, v111, v112, v116, v128] = svs;
      return (await ((async () => {
        
        
        return v110;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Created: {
        created: {
          decode: Created_created,
          dom: [],
          rng: ctc1
          }
        },
      Giftee: {
        recipient: {
          decode: Giftee_recipient,
          dom: [],
          rng: ctc0
          }
        },
      Maturity: {
        maturity: {
          decode: Maturity_maturity,
          dom: [],
          rng: ctc1
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc2, ctc1, ctc0, ctc1]
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
  
  
  const v95 = stdlib.protect(ctc2, interact.getParams, 'for Gifter\'s interact field getParams');
  const v96 = v95.maturity;
  const v97 = v95.payment;
  const v98 = v95.recipient;
  const v99 = stdlib.protect(ctc0, interact.pass, 'for Gifter\'s interact field pass');
  
  const v106 = stdlib.digest([ctc0], [v99]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v98, v97, v96, v106],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc3],
    pay: [v97, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v108, v109, v110, v111], secs: v113, time: v112, didSend: v41, from: v107 } = txn1;
      
      sim_r.txns.push({
        amt: v109,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v116 = v108;
      
      const v128 = stdlib.safeAdd(v112, v110);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v108, v109, v110, v111], secs: v113, time: v112, didSend: v41, from: v107 } = txn1;
  ;
  const v116 = v108;
  stdlib.protect(ctc4, await interact.funded(), {
    at: './index.rsh:37:20:application',
    fs: ['at ./index.rsh:36:7:application call to [unknown function] (defined at: ./index.rsh:36:32:function exp)'],
    msg: 'funded',
    who: 'Gifter'
    });
  
  const v128 = stdlib.safeAdd(v112, v110);
  await ctc.waitUntilTime(v128);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v135], secs: v137, time: v136, didSend: v72, from: v134 } = txn2;
  ;
  const v138 = stdlib.addressEq(v116, v134);
  stdlib.assert(v138, {
    at: './index.rsh:61:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Gifter'
    });
  const v139 = stdlib.digest([ctc0], [v135]);
  const v140 = stdlib.digestEq(v111, v139);
  stdlib.assert(v140, {
    at: './index.rsh:62:10:application',
    fs: [],
    msg: null,
    who: 'Gifter'
    });
  ;
  stdlib.protect(ctc4, await interact.informRedeemed(v109), {
    at: './index.rsh:67:28:application',
    fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:32:function exp)'],
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
  
  
  const v100 = stdlib.protect(ctc0, interact.pass, 'for Recipient\'s interact field pass');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc1, ctc0, ctc0, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v108, v109, v110, v111], secs: v113, time: v112, didSend: v41, from: v107 } = txn1;
  ;
  const v116 = ctc.iam(v108);
  stdlib.protect(ctc3, await interact.funded(), {
    at: './index.rsh:37:20:application',
    fs: ['at ./index.rsh:36:7:application call to [unknown function] (defined at: ./index.rsh:36:32:function exp)'],
    msg: 'funded',
    who: 'Recipient'
    });
  
  const v128 = stdlib.safeAdd(v112, v110);
  await ctc.waitUntilTime(v128);
  const v132 = stdlib.digest([ctc0], [v100]);
  const v133 = stdlib.digestEq(v111, v132);
  stdlib.assert(v133, {
    at: './index.rsh:52:11:application',
    fs: ['at ./index.rsh:50:17:application call to [unknown function] (defined at: ./index.rsh:50:21:function exp)'],
    msg: null,
    who: 'Recipient'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v108, v109, v110, v111, v112, v116, v128, v100],
    evt_cnt: 1,
    funcNum: 1,
    lct: v112,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v135], secs: v137, time: v136, didSend: v72, from: v134 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v116,
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
    tys: [ctc1, ctc0, ctc0, ctc2, ctc0, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v135], secs: v137, time: v136, didSend: v72, from: v134 } = txn2;
  ;
  const v138 = stdlib.addressEq(v116, v134);
  stdlib.assert(v138, {
    at: './index.rsh:61:13:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Recipient'
    });
  const v139 = stdlib.digest([ctc0], [v135]);
  const v140 = stdlib.digestEq(v111, v139);
  stdlib.assert(v140, {
    at: './index.rsh:62:10:application',
    fs: [],
    msg: null,
    who: 'Recipient'
    });
  ;
  stdlib.protect(ctc3, await interact.informRedeemed(v109), {
    at: './index.rsh:67:28:application',
    fs: ['at ./index.rsh:66:7:application call to [unknown function] (defined at: ./index.rsh:66:32:function exp)'],
    msg: 'informRedeemed',
    who: 'Recipient'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`Created_created()uint64`, `Giftee_recipient()address`, `Maturity_maturity()uint64`],
    sigs: [`Created_created()uint64`, `Giftee_recipient()address`, `Maturity_maturity()uint64`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAFAAHDu5znCqCDr5EPICYDAQABAQAiNQAxGEEBwSpkSSJbNQGBCFs1AjYaABdJQQBfIjUEIzUGSSQMQAA2SSUMQAAYJRJENAEjEkQoZClkUEk1A1cAIDUHQgF7JBJENAEjEkQoZClkUEk1A1coCDUHQgFjgb2t3pwFEkQ0ASMSRChkKWRQSTUDV1AINQdCAUY2GgIXNQQ2GgM2GgEXSSMMQABkIxJEIzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVdYIDX/gXhbNf5JNQUXNf2ABNUVGRQ0/RZQsDIGNP4PRDT/MQASRDQDVzAgNP0WARJEsSKyATQDIQRbsggjshA0/7IHs0IAh0iBoI0GiADtIjQBEkQ0BEkiEkw0AhIRREk1BUlKVwAgNf8hBFs1/oEoWzX9VzAgNfyABL0nHlw0/1A0/hZQNP0WUDT8ULA0/ogAqjT/NfsyBjT9CDX6NP80/hZQNP0WUDT8UDIGFlA0+1A0+hZQKEsBVwB/ZylLAVd/AWdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T2","name":"v194","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Created_created","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Giftee_recipient","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Maturity_maturity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"v196","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f610b4a38819003918201601f19168301916001600160401b038311848410176104125780849260a094604052833981010312610428576040519060a082016001600160401b0381118382101761041257604052805182526020810151906001600160a01b0382168203610428576080916020840152604081015160408401526060810151606084015201516080820152436003556040516080810181811060018060401b038211176104125760009160609160405282815282602082015282604082015201526040516040810181811060018060401b0382111761041257604052600081526000602082015260ff60045416610481577fe29e3d6fc3d8a76bea7703913ed0f9e529edcc20b9e5a9b7b84ffa4b21f79e6f60c06040513381528451602082015260018060a01b0360208601511660408201526040850151606082015260608501516080820152608085015160a0820152a181518015908115610475575b501561045c57604082015134036104435760208201516001600160a01b0316815260608201514390810190811061042d574381106104285760208201526040516001600160401b0360e082019081119082111761041257602060c09260e0830160405260008352600082840152600060408401526000606084015260006080840152600060a0840152600084840152608060018060a01b03838701511695868552604081015184860152606081015160408601520151606084015243608084015260018060a01b0381511660a0840152015182820152600160005543600155604051926020840152602081015160408401526040810151606084015260608101516080840152608081015160a084015260018060a01b0360a08201511682840152015160e082015260e08152610100810181811060018060401b038211176104125760405280516001600160401b03811161041257600254600181811c91168015610408575b60208210146103f257601f811161038d575b50602091601f82116001146103285791819260009261031d575b50508160011b916000199060031b1c1916176002555b6040516106af908161049b8239f35b0151905038806102f8565b601f19821692600260005260206000209160005b8581106103755750836001951061035c575b505050811b0160025561030e565b015160001960f88460031b161c1916905538808061034e565b9192602060018192868501518155019401920161033c565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c810191602084106103e8575b601f0160051c01905b8181106103dc57506102de565b600081556001016103cf565b90915081906103c6565b634e487b7160e01b600052602260045260246000fd5b90607f16906102cc565b634e487b7160e01b600052604160045260246000fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b90506001541438610166565b60405163100960cb60e01b8152600a6004820152602490fdfe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c806313777274146102505780631e93b0f1146102315780632b8616c4146101d85780635dee56871461016a578063832307571461014b578063ab53f2c6146100df5763ecb9059d146100765750610010565b346100db57816003193601126100db5760016100906105da565b9254036100c457602080848460806100b76100a96104fd565b858082518301019101610628565b0151928391015251908152f35b602490600784519163100960cb60e01b8352820152fd5b5080fd5b8284346100db57816003193601126100db5781546100fb6104fd565b91805193849283526020828185015284518093850152815b83811061013457505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610113565b8284346100db57816003193601126100db576020906001549051908152f35b50346100db57816003193601126100db5760016101856105da565b9254036101c15760208380846101996104fd565b80516001600160a01b03916101b49181018701908701610628565b5116928391015251908152f35b602490600884519163100960cb60e01b8352820152fd5b50346100db57816003193601126100db5760016101f36105da565b92540361021a57602060608484816100b761020c6104fd565b868082518301019101610628565b602490600984519163100960cb60e01b8352820152fd5b8284346100db57816003193601126100db576020906003549051908152f35b5091806003193601126100db576102656105da565b5080516001600160401b0390808301828111828210176104b0578352843581526020948582019060248035835260ff82541661049b577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639246060875133815286518b820152855189820152a160019485885403610485576102f46102e66104fd565b8a8082518301019101610628565b9451801590811561047a575b50156104645760c0850151431061044e57346104385760a085019260018060a01b039433868651160361042257606087015190518951928c84019182528c84528a840194848610908611176104105750838a5282519020036103fd5750505085809388829483945116910151908282156103f4575bf1156103e95782805582815561038c6002546104c3565b8061039a575b505051908152f35b601f81116001146103b3575050816002555b3880610392565b6002845281601f868620920160051c820191015b8181106103df575050508183812081600255556103ac565b84815582016103c7565b5051903d90823e3d90fd5b506108fc610375565b604460139163100960cb60e01b84520152fd5b634e487b7160e01b8c5260419052848bfd5b885163100960cb60e01b81526012818401528490fd5b5090601186519163100960cb60e01b8352820152fd5b5090601086519163100960cb60e01b8352820152fd5b5090600f86519163100960cb60e01b8352820152fd5b905086541438610300565b5090600e86519163100960cb60e01b8352820152fd5b90600d86519163100960cb60e01b8352820152fd5b634e487b7160e01b855260418652602485fd5b90600182811c921680156104f3575b60208310146104dd57565b634e487b7160e01b600052602260045260246000fd5b91607f16916104d2565b60405190600060025461050f816104c3565b8085526001918083169081156105bb5750600114610563575b5050829003601f01601f191682016001600160401b0381118382101761054d57604052565b634e487b7160e01b600052604160045260246000fd5b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8385106105a757505050508301013880610528565b805488860183015293019284908201610592565b919250506020925060ff191682850152151560051b8301013880610528565b60405190608082016001600160401b0381118382101761054d5760405260006060838281528260208201528260408201520152565b51906001600160a01b038216820361062357565b600080fd5b908160e0910312610623576040519060e08201906001600160401b0382118383101761054d5760c09160405261065d8161060f565b83526020810151602084015260408101516040840152606081015160608401526080810151608084015261069360a0820161060f565b60a0840152015160c08201529056fea164736f6c6343000810000a`,
  BytecodeLen: 2890,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:64:11:after expr stmt semicolon',
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
