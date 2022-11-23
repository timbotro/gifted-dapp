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
      const [v146, v147, v148, v149, v150, v152, v156, v168, v176] = svs;
      return (await ((async () => {
        
        
        return v152;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Giftee_recipient = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v146, v147, v148, v149, v150, v152, v156, v168, v176] = svs;
      return (await ((async () => {
        
        
        return v147;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Maturity_maturity = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v146, v147, v148, v149, v150, v152, v156, v168, v176] = svs;
      return (await ((async () => {
        
        
        return v149;}))(...args));
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
      1: [ctc0, ctc0, ctc1, ctc1, ctc2, ctc1, ctc0, ctc1, ctc1]
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
    recipient: ctc1,
    timeout: ctc0
    });
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  
  
  const v132 = stdlib.protect(ctc2, interact.getParams, 'for Gifter\'s interact field getParams');
  const v133 = v132.maturity;
  const v134 = v132.payment;
  const v135 = v132.recipient;
  const v136 = v132.timeout;
  const v137 = stdlib.protect(ctc0, interact.pass, 'for Gifter\'s interact field pass');
  
  const v145 = stdlib.digest([ctc0], [v137]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v135, v134, v133, v145, v136],
    evt_cnt: 5,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc3, ctc0],
    pay: [v134, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v147, v148, v149, v150, v151], secs: v153, time: v152, didSend: v44, from: v146 } = txn1;
      
      sim_r.txns.push({
        amt: v148,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v156 = v147;
      
      const v168 = stdlib.safeAdd(v152, v149);
      const v176 = stdlib.safeAdd(v168, v151);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v147, v148, v149, v150, v151], secs: v153, time: v152, didSend: v44, from: v146 } = txn1;
  ;
  const v156 = v147;
  stdlib.protect(ctc4, await interact.funded(), {
    at: './index.rsh:38:20:application',
    fs: ['at ./index.rsh:37:7:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)'],
    msg: 'funded',
    who: 'Gifter'
    });
  
  const v168 = stdlib.safeAdd(v152, v149);
  const v176 = stdlib.safeAdd(v168, v151);
  await ctc.waitUntilTime(v168);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v176],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v146, v147, v148, v149, v150, v152, v156, v168, v176],
      evt_cnt: 0,
      funcNum: 2,
      lct: v152,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v201, time: v200, didSend: v109, from: v199 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v146,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc1, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v201, time: v200, didSend: v109, from: v199 } = txn3;
    ;
    const v202 = stdlib.addressEq(v146, v199);
    const v203 = stdlib.addressEq(v156, v199);
    const v204 = v202 ? true : v203;
    stdlib.assert(v204, {
      at: 'reach standard library:197:11:dot',
      fs: ['at ./index.rsh:62:71:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'sender correct',
      who: 'Gifter'
      });
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:58:29:application',
      fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:56:28:function exp)', 'at ./index.rsh:62:71:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Gifter'
      });
    
    return;
    
    }
  else {
    const {data: [v183], secs: v185, time: v184, didSend: v75, from: v182 } = txn2;
    ;
    const v186 = stdlib.addressEq(v156, v182);
    stdlib.assert(v186, {
      at: './index.rsh:62:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Gifter'
      });
    const v187 = stdlib.digest([ctc0], [v183]);
    const v188 = stdlib.digestEq(v150, v187);
    stdlib.assert(v188, {
      at: './index.rsh:63:10:application',
      fs: [],
      msg: null,
      who: 'Gifter'
      });
    ;
    stdlib.protect(ctc4, await interact.informRedeemed(v148), {
      at: './index.rsh:68:28:application',
      fs: ['at ./index.rsh:67:7:application call to [unknown function] (defined at: ./index.rsh:67:32:function exp)'],
      msg: 'informRedeemed',
      who: 'Gifter'
      });
    
    return;
    }
  
  
  
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
  
  
  const v138 = stdlib.protect(ctc0, interact.pass, 'for Recipient\'s interact field pass');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 5,
    funcNum: 0,
    out_tys: [ctc1, ctc0, ctc0, ctc2, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v147, v148, v149, v150, v151], secs: v153, time: v152, didSend: v44, from: v146 } = txn1;
  ;
  const v156 = ctc.iam(v147);
  stdlib.protect(ctc3, await interact.funded(), {
    at: './index.rsh:38:20:application',
    fs: ['at ./index.rsh:37:7:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)'],
    msg: 'funded',
    who: 'Recipient'
    });
  
  const v168 = stdlib.safeAdd(v152, v149);
  const v176 = stdlib.safeAdd(v168, v151);
  await ctc.waitUntilTime(v168);
  const v180 = stdlib.digest([ctc0], [v138]);
  const v181 = stdlib.digestEq(v150, v180);
  stdlib.assert(v181, {
    at: './index.rsh:53:11:application',
    fs: ['at ./index.rsh:51:17:application call to [unknown function] (defined at: ./index.rsh:51:21:function exp)'],
    msg: null,
    who: 'Recipient'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v146, v147, v148, v149, v150, v152, v156, v168, v176, v138],
    evt_cnt: 1,
    funcNum: 1,
    lct: v152,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v183], secs: v185, time: v184, didSend: v75, from: v182 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v156,
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
    timeoutAt: ['time', v176],
    tys: [ctc1, ctc1, ctc0, ctc0, ctc2, ctc0, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v146, v147, v148, v149, v150, v152, v156, v168, v176],
      evt_cnt: 0,
      funcNum: 2,
      lct: v152,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v201, time: v200, didSend: v109, from: v199 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v146,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc1, ctc0, ctc0, ctc2, ctc0, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v201, time: v200, didSend: v109, from: v199 } = txn3;
    ;
    const v202 = stdlib.addressEq(v146, v199);
    const v203 = stdlib.addressEq(v156, v199);
    const v204 = v202 ? true : v203;
    stdlib.assert(v204, {
      at: 'reach standard library:197:11:dot',
      fs: ['at ./index.rsh:62:71:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'sender correct',
      who: 'Recipient'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:58:29:application',
      fs: ['at ./index.rsh:57:9:application call to [unknown function] (defined at: ./index.rsh:57:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:56:28:function exp)', 'at ./index.rsh:62:71:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Recipient'
      });
    
    return;
    
    }
  else {
    const {data: [v183], secs: v185, time: v184, didSend: v75, from: v182 } = txn2;
    ;
    const v186 = stdlib.addressEq(v156, v182);
    stdlib.assert(v186, {
      at: './index.rsh:62:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Recipient'
      });
    const v187 = stdlib.digest([ctc0], [v183]);
    const v188 = stdlib.digestEq(v150, v187);
    stdlib.assert(v188, {
      at: './index.rsh:63:10:application',
      fs: [],
      msg: null,
      who: 'Recipient'
      });
    ;
    stdlib.protect(ctc3, await interact.informRedeemed(v148), {
      at: './index.rsh:68:28:application',
      fs: ['at ./index.rsh:67:7:application call to [unknown function] (defined at: ./index.rsh:67:32:function exp)'],
      msg: 'informRedeemed',
      who: 'Recipient'
      });
    
    return;
    }
  
  
  
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
  appApproval: `ByAHAAHDu5znCqCDr5EPAqABQCYDAQABAQAiNQAxGEECPCpkSSJbNQGBCFs1AjYaABdJQQBfIjUEIzUGSSQMQAA2SSUMQAAYJRJENAEjEkQoZClkUEk1A1cgIDUHQgH2JBJENAEjEkQoZClkUEk1A1dICDUHQgHegb2t3pwFEkQ0ASMSRChkKWRQSTUDV3AINQdCAcE2GgIXNQQ2GgM2GgEXSSMMQADISSEEDEAAViEEEkQjNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEQbFATbAyBjQDIQVbD0Q0/zEAEjQDV3ggMQASEUSxIrIBNAMhBluyCCOyEDT/sgezQgEJSCM0ARJENARJIhJMNAISEUQoZClkUEk1A0lXeCA1/4GYAVs1/kk1BRc1/YAE1RUZFDT9FlCwMgZJNP4PRDQDIQVbDEQ0/zEAEkQ0A1dQIDT9FgESRLEisgE0AyEGW7III7IQNP+yB7NCAJ5IgaCNBogBBCI0ARJENARJIhJMNAISEURJNQVJSklXACA1/4EgWzX+gShbNf1XMCA1/IFQWzX7gARNx9dSNP9QNP4WUDT9FlA0/FA0+xZQsDT+iAC3NP81+jIGNP0ISTX5NPsINfgxADT/UDT+FlA0/RZQNPxQMgYWUDT6UDT5FlA0+BZQKEsBVwB/ZylLAVd/KWdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"}],"internalType":"struct T2","name":"v280","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Created_created","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Giftee_recipient","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Maturity_maturity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"v282","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v284","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62000e1e38819003918201601f19168301916001600160401b038311848410176200049e5780849260c0946040528339810103126200050c576040519060c082016001600160401b038111838210176200049e57604052805182526020810151906001600160a01b03821682036200050c5760a0916020840152604081015160408401526060810151606084015260808101516080840152015160a0820152436003556040516080810181811060018060401b038211176200049e57604090815260008083526020830181905281830181905260609283015251919082016001600160401b038111838210176200049e5760405260008252600060208301526000604083015260ff60045416620004f3577fa68520d1090ba0e2fc0ce776305879fe70c5714a71f67a0cb9d868bfa53a967360e06040513381528351602082015260018060a01b0360208501511660408201526040840151606082015260608401516080820152608084015160a082015260a084015160c0820152a180518015908115620004e6575b5015620004cd5760408101513403620004b45760208101516001600160a01b031682526060810151620001d790620001c5904362000511565b80602085015260a08301519062000511565b6040830152604051918261012081011060018060401b03610120850111176200049e576080604092610120850184526000602086015260008486015260006060860152600082860152600060a0860152600060c0860152600060e0860152600061010086015233855260018060a01b036020820151166020860152838101518486015260608101516060860152015160808401524360a084015260018060a01b0381511660c0840152602081015160e084015201516101008201526001600055436001556101006040519133602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015160c084015260018060a01b0360c08201511660e084015260e08101518284015201516101208201526101208152610140810181811060018060401b038211176200049e5760405280516001600160401b0381116200049e57600254600181811c9116801562000493575b60208210146200047d57601f811162000413575b50602091601f8211600114620003a9579181926000926200039d575b50508160011b916000199060031b1c1916176002555b6040516108e090816200053e8239f35b01519050388062000377565b601f19821692600260005260206000209160005b858110620003fa57508360019510620003e0575b505050811b016002556200038d565b015160001960f88460031b161c19169055388080620003d1565b91926020600181928685015181550194019201620003bd565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000472575b601f0160051c01905b8181106200046557506200035b565b6000815560010162000456565b90915081906200044d565b634e487b7160e01b600052602260045260246000fd5b90607f169062000347565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b8152600c6004820152602490fd5b60405163100960cb60e01b8152600b6004820152602490fd5b905060015414386200018c565b60405163100960cb60e01b8152600a6004820152602490fd5b600080fd5b9190820191828111620005275782106200050c57565b634e487b7160e01b600052601160045260246000fdfe6040608081526004908136101561001d575b5050361561001b57005b005b600090813560e01c806313777274146104215780631e93b0f1146104035780632b8616c4146103b75780635dee5687146103445780638323075714610326578063ab53f2c6146102bb578063ecb9059d146102505763f5a239bc146100825750610011565b6020928360031936011261024c57610098610747565b508151908482016001600160401b038111838210176102395783528035825260ff815416610222577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a838051338152845188820152a1600184540361020b5761011061010261067c565b868082518301019101610795565b915180159081156101ff575b50156101e85761010082015143106101d157346101ba5781516001600160a01b039190821633036101ac5760015b15610195575083808385829594839551169101519082821561018c575bf115610182578180558160015561017c61082b565b51908152f35b51903d90823e3d90fd5b506108fc610167565b602490601a85519163100960cb60e01b8352820152fd5b338260c0850151161461014a565b602490601984519163100960cb60e01b8352820152fd5b602490601884519163100960cb60e01b8352820152fd5b602490601784519163100960cb60e01b8352820152fd5b9050600154143861011c565b602490601684519163100960cb60e01b8352820152fd5b602490601584519163100960cb60e01b8352820152fd5b634e487b7160e01b855260418252602485fd5b8280fd5b5091346102b757816003193601126102b757600161026c610747565b9254036102a057602080848460a061029361028561067c565b858082518301019101610795565b0151928391015251908152f35b602490600784519163100960cb60e01b8352820152fd5b5080fd5b50346102b757816003193601126102b75781546102d661067c565b91805193849283526020828185015284518093850152815b83811061030f57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016102ee565b50346102b757816003193601126102b7576020906001549051908152f35b5091346102b757816003193601126102b7576001610360610747565b9254036103a057602083808461037461067c565b80516001600160a01b03918691610392919081018301908301610795565b015116928391015251908152f35b602490600884519163100960cb60e01b8352820152fd5b5091346102b757816003193601126102b75760016103d3610747565b9254036103ec576020606084848261029361010261067c565b602490600984519163100960cb60e01b8352820152fd5b50346102b757816003193601126102b7576020906003549051908152f35b50806003193601126102b757610435610747565b5080516001600160401b038183018181118382101761062f57835284358252602094858301916024908135845260ff835416610619577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639246060875133815287518b820152865189820152a16001875403610603576104c26104b461067c565b898082518301019101610795565b945180159081156105f7575b50156105e15760e085015143106105cb576101008501514310156105b5573461059f5760c085019260018060a01b039433868651160361058957608087015190518851928b84019182528b845289840194848610908611176105775750838952825190200361056457505050848093858294839451169101519082821561018c57f115610182578180558160015561017c61082b565b604460149163100960cb60e01b84520152fd5b634e487b7160e01b8b5260419052848afd5b875163100960cb60e01b81526013818401528490fd5b5090601285519163100960cb60e01b8352820152fd5b5090601185519163100960cb60e01b8352820152fd5b5090601085519163100960cb60e01b8352820152fd5b5090600f85519163100960cb60e01b8352820152fd5b905060015414386104ce565b5090600e85519163100960cb60e01b8352820152fd5b5090600d85519163100960cb60e01b8352820152fd5b634e487b7160e01b855260418652602485fd5b90600182811c92168015610672575b602083101461065c57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610651565b60405190600060025461068e81610642565b80855260019180831690811561072857506001146106e2575b5050829003601f01601f191682016001600160401b038111838210176106cc57604052565b634e487b7160e01b600052604160045260246000fd5b600260009081526020935091836000805160206108b48339815191525b838510610714575050505083010138806106a7565b8054888601830152930192849082016106ff565b919250506020925060ff191682850152151560051b83010138806106a7565b60405190608082016001600160401b038111838210176106cc5760405260006060838281528260208201528260408201520152565b51906001600160a01b038216820361079057565b600080fd5b80916101209283910312610790576040519182016001600160401b038111838210176106cc576040526107c78161077c565b82526107d56020820161077c565b602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015261080e60c0820161077c565b60c083015260e081015160e0830152610100809101519082015290565b610836600254610642565b8061083e5750565b601f811160011461085157506000600255565b6002600090815290600190601f0160051c6000805160206108b4833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b8181106108a957505050602081208160025555565b838155820161089456fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 3614,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:62:71:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:65:11:after expr stmt semicolon',
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
