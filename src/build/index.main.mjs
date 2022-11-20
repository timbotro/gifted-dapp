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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc0]
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
    lct: stdlib.checkedBigNumberify('./index.rsh:33:12:dot', stdlib.UInt_max, '0'),
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
    at: './index.rsh:38:22:application',
    fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:34:function exp)'],
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
    at: './index.rsh:53:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Gifter'
    });
  const v137 = stdlib.digest([ctc0], [v133]);
  const v138 = stdlib.digestEq(v110, v137);
  stdlib.assert(v138, {
    at: './index.rsh:54:12:application',
    fs: [],
    msg: null,
    who: 'Gifter'
    });
  ;
  stdlib.protect(ctc4, await interact.informRedeemed(v108), {
    at: './index.rsh:59:30:application',
    fs: ['at ./index.rsh:58:9:application call to [unknown function] (defined at: ./index.rsh:58:34:function exp)'],
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
    at: './index.rsh:38:22:application',
    fs: ['at ./index.rsh:37:9:application call to [unknown function] (defined at: ./index.rsh:37:34:function exp)'],
    msg: 'funded',
    who: 'Recipient'
    });
  
  await ctc.waitUntilTime(v122);
  const v130 = stdlib.digest([ctc0], [v99]);
  const v131 = stdlib.digestEq(v110, v130);
  stdlib.assert(v131, {
    at: './index.rsh:43:13:application',
    fs: ['at ./index.rsh:41:19:application call to [unknown function] (defined at: ./index.rsh:41:23:function exp)'],
    msg: null,
    who: 'Recipient'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v108, v110, v115, v122, v99],
    evt_cnt: 1,
    funcNum: 1,
    lct: v111,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:15:decimal', stdlib.UInt_max, '0'), []],
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
    tys: [ctc0, ctc2, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v133], secs: v135, time: v134, didSend: v71, from: v132 } = txn2;
  ;
  const v136 = stdlib.addressEq(v115, v132);
  stdlib.assert(v136, {
    at: './index.rsh:53:15:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Recipient'
    });
  const v137 = stdlib.digest([ctc0], [v133]);
  const v138 = stdlib.digestEq(v110, v137);
  stdlib.assert(v138, {
    at: './index.rsh:54:12:application',
    fs: [],
    msg: null,
    who: 'Recipient'
    });
  ;
  stdlib.protect(ctc3, await interact.informRedeemed(v108), {
    at: './index.rsh:59:30:application',
    fs: ['at ./index.rsh:58:9:application call to [unknown function] (defined at: ./index.rsh:58:34:function exp)'],
    msg: 'informRedeemed',
    who: 'Recipient'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByACAAEmAgABACI1ADEYQQFTKGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAYCMSRCM0ARJENARJIhJMNAISEUQpZEk1A0lXKCA1/4FIWzX+STUFFzX9gATVFRkUNP0WULAyBjT+D0Q0/zEAEkQ0A1cIIDT9FgESRLEisgE0AyJbsggjshA0/7IHs0IAdUiBoI0GiADbIjQBEkQ0BEkiEkw0AhIRREk1BUlKVwAgNf+BIFs1/oEoWzX9VzAgNfyABL0nHlw0/1A0/hZQNP0WUDT8ULA0/ogAmDT/NfsyBjT9CDX6NP4WNPxQNPtQNPoWUClLAVcAUGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T0","name":"v174","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v176","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6108e938819003918201601f199081168401926001600160401b0392838511868610176103c1578160a092879260409788528339810103126103d757825160a08101818110848211176103c157845284518152602080860151916001600160a01b03919082841684036103d757818101938452868801519787820198895260608101519860608301998a5260808092015194828401958652436003558951958587018781108b8211176103c1578b5260008097528a519b8b8d018d81108c8211176103ad578c52878d52868d0198888a5260049660ff885416610395577fe29e3d6fc3d8a76bea7703913ed0f9e529edcc20b9e5a9b7b84ffa4b21f79e6f60c08f80519033825284518d83015288865116908201528851606082015285518a820152865160a0820152a1518015908115610389575b5015610372578451340361035b57839051168d52514301804311610348574381106103445788528a51978489018981108c821117610331578c9d84918e52898b52888b01809e8b82528c01948b865260608d01978c895251809d525190525116825251835260019a8b8855438c558c5198878a0152518c890152511660608701525181860152845260a084018481108782111761031e578852835195861161030b57600254908782811c92168015610301575b838310146102ee5750601f81116102a7575b508093601f861160011461024457505091839491849394610239575b50501b916000199060031b1c1916176002555b5161050c90816103dd8239f35b015192503880610219565b600283528183209493928692918316915b8883831061028d5750505010610274575b505050811b0160025561022c565b015160001960f88460031b161c19169055388080610266565b858701518855909601959485019487935090810190610255565b60028352818320601f870160051c8101918388106102e4575b601f0160051c019087905b8281106102d95750506101fd565b8481550187906102cb565b90915081906102c0565b634e487b7160e01b845260229052602483fd5b91607f16916101eb565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b895260418752602489fd5b8780fd5b634e487b7160e01b885260118652602488fd5b8c5163100960cb60e01b8152600981890152602490fd5b8c5163100960cb60e01b8152600881890152602490fd5b90506001541438610138565b508c5163100960cb60e01b8152600781890152602490fd5b634e487b7160e01b89526041600452602489fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608060408181526004918236101561001f575b505050361561001d57005b005b600092833560e01c918263137772741461010557505080631e93b0f1146100e757806383230757146100c95763ab53f2c61461005b5780610012565b346100c557816003193601126100c5578154610075610422565b91805193849283526020828185015284518093850152815b8381106100ae57505060608094508284010152601f80199101168101030190f35b80860182015187820160600152869450810161008d565b5080fd5b50346100c557816003193601126100c5576020906001549051908152f35b50346100c557816003193601126100c5576020906003549051908152f35b838591816003193601126103e4576020936001600160401b0391808601838111828210176103d1578452849052825190818401838111838210176103be578452803582528582019160248035845260ff8354166103aa577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639246060875133815284518b820152865189820152a160019485885403610395576101a4610422565b9360808580518101031261039157875195608087018781108482111761037f578952858b0151875285890151878c0190815260608701516001600160a01b0397909690888816880361037b57898c019788526080015160608a0190815290518015908115610370575b501561035a57514310610344573461032e57338787511603610318575190518951928c84019182528c84528a840194848610908611176103065750838a5282519020036102f3575050508580938193829351169051908282156102ea575bf1156102df578280558281556102826002546103e8565b80610290575b505051908152f35b601f81116001146102a9575050816002555b8380610288565b6002845281601f868620920160051c820191015b8181106102d5575050508183812081600255556102a2565b84815582016102bd565b5051903d90823e3d90fd5b506108fc61026b565b604460109163100960cb60e01b84520152fd5b634e487b7160e01b8c5260419052848bfd5b895163100960cb60e01b8152600f818501528590fd5b895163100960cb60e01b8152600e818501528590fd5b895163100960cb60e01b8152600d818501528590fd5b8a5163100960cb60e01b8152600c818601528690fd5b90508a54148e61020d565b8c80fd5b634e487b7160e01b8b5260418352848bfd5b8880fd5b50855163100960cb60e01b8152600b81850152fd5b855163100960cb60e01b8152600a81850152fd5b634e487b7160e01b865260418252602486fd5b634e487b7160e01b865260418352602486fd5b8280fd5b90600182811c92168015610418575b602083101461040257565b634e487b7160e01b600052602260045260246000fd5b91607f16916103f7565b604051906000600254610434816103e8565b8085526001918083169081156104e05750600114610488575b5050829003601f01601f191682016001600160401b0381118382101761047257604052565b634e487b7160e01b600052604160045260246000fd5b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8385106104cc5750505050830101388061044d565b8054888601830152930192849082016104b7565b919250506020925060ff191682850152151560051b830101388061044d56fea164736f6c6343000810000a`,
  BytecodeLen: 2281,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:35:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:56:13:after expr stmt semicolon',
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
