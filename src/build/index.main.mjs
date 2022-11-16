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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc0, ctc1, ctc1]
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
  
  
  const v123 = stdlib.protect(ctc0, interact.pass, 'for Gifter\'s interact field pass');
  
  const v126 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:30:77:application',
    fs: ['at ./index.rsh:29:16:application call to [unknown function] (defined at: ./index.rsh:29:20:function exp)'],
    msg: 'getParams',
    who: 'Gifter'
    });
  const v127 = v126.maturity;
  const v128 = v126.payment;
  const v129 = v126.recipient;
  const v133 = stdlib.digest([ctc0], [v123]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v129, v128, v127, v133],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:34:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0, ctc3],
    pay: [v128, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v135, v136, v137, v138], secs: v140, time: v139, didSend: v40, from: v134 } = txn1;
      
      sim_r.txns.push({
        amt: v136,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v143 = v135;
      const v150 = stdlib.safeAdd(v139, v137);
      const v152 = stdlib.safeAdd(v137, stdlib.checkedBigNumberify('./index.rsh:53:59:decimal', stdlib.UInt_max, '5'));
      const v159 = stdlib.safeAdd(v150, v152);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v135, v136, v137, v138], secs: v140, time: v139, didSend: v40, from: v134 } = txn1;
  ;
  const v143 = v135;
  const v150 = stdlib.safeAdd(v139, v137);
  const v152 = stdlib.safeAdd(v137, stdlib.checkedBigNumberify('./index.rsh:53:59:decimal', stdlib.UInt_max, '5'));
  const v159 = stdlib.safeAdd(v150, v152);
  stdlib.protect(ctc4, await interact.funded(), {
    at: './index.rsh:39:22:application',
    fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:34:function exp)'],
    msg: 'funded',
    who: 'Gifter'
    });
  
  await ctc.waitUntilTime(v150);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v159],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v134, v136, v138, v143, v150, v159],
      evt_cnt: 0,
      funcNum: 2,
      lct: v139,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v185, time: v184, didSend: v100, from: v183 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v134,
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
      tys: [ctc1, ctc0, ctc3, ctc1, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v185, time: v184, didSend: v100, from: v183 } = txn3;
    ;
    const v186 = stdlib.addressEq(v134, v183);
    const v187 = stdlib.addressEq(v143, v183);
    const v188 = v186 ? true : v187;
    stdlib.assert(v188, {
      at: 'reach standard library:197:11:dot',
      fs: ['at ./index.rsh:53:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'sender correct',
      who: 'Gifter'
      });
    ;
    stdlib.protect(ctc4, await interact.informTimeout(), {
      at: './index.rsh:49:31:application',
      fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:36:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:53:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Gifter'
      });
    
    return;
    
    }
  else {
    const {data: [v171], secs: v173, time: v172, didSend: v71, from: v170 } = txn2;
    ;
    const v174 = stdlib.addressEq(v143, v170);
    stdlib.assert(v174, {
      at: './index.rsh:53:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Gifter'
      });
    const v175 = stdlib.digest([ctc0], [v171]);
    const v176 = stdlib.digestEq(v138, v175);
    stdlib.assert(v176, {
      at: './index.rsh:54:12:application',
      fs: [],
      msg: null,
      who: 'Gifter'
      });
    ;
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v135, v136, v137, v138], secs: v140, time: v139, didSend: v40, from: v134 } = txn1;
  ;
  const v143 = ctc.iam(v135);
  const v150 = stdlib.safeAdd(v139, v137);
  const v152 = stdlib.safeAdd(v137, stdlib.checkedBigNumberify('./index.rsh:53:59:decimal', stdlib.UInt_max, '5'));
  const v159 = stdlib.safeAdd(v150, v152);
  stdlib.protect(ctc3, await interact.funded(), {
    at: './index.rsh:39:22:application',
    fs: ['at ./index.rsh:38:9:application call to [unknown function] (defined at: ./index.rsh:38:34:function exp)'],
    msg: 'funded',
    who: 'Recipient'
    });
  
  await ctc.waitUntilTime(v150);
  const v167 = stdlib.protect(ctc1, await interact.unwrap(), {
    at: './index.rsh:43:46:application',
    fs: ['at ./index.rsh:42:19:application call to [unknown function] (defined at: ./index.rsh:42:23:function exp)'],
    msg: 'unwrap',
    who: 'Recipient'
    });
  const v168 = stdlib.digest([ctc1], [v167]);
  const v169 = stdlib.digestEq(v138, v168);
  stdlib.assert(v169, {
    at: './index.rsh:44:13:application',
    fs: ['at ./index.rsh:42:19:application call to [unknown function] (defined at: ./index.rsh:42:23:function exp)'],
    msg: null,
    who: 'Recipient'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v134, v136, v138, v143, v150, v159, v167],
    evt_cnt: 1,
    funcNum: 1,
    lct: v139,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:53:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v171], secs: v173, time: v172, didSend: v71, from: v170 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v143,
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
    timeoutAt: ['time', v159],
    tys: [ctc0, ctc1, ctc2, ctc0, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v134, v136, v138, v143, v150, v159],
      evt_cnt: 0,
      funcNum: 2,
      lct: v139,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v185, time: v184, didSend: v100, from: v183 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v134,
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
      tys: [ctc0, ctc1, ctc2, ctc0, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v185, time: v184, didSend: v100, from: v183 } = txn3;
    ;
    const v186 = stdlib.addressEq(v134, v183);
    const v187 = stdlib.addressEq(v143, v183);
    const v188 = v186 ? true : v187;
    stdlib.assert(v188, {
      at: 'reach standard library:197:11:dot',
      fs: ['at ./index.rsh:53:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'sender correct',
      who: 'Recipient'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:49:31:application',
      fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:36:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:47:30:function exp)', 'at ./index.rsh:53:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Recipient'
      });
    
    return;
    
    }
  else {
    const {data: [v171], secs: v173, time: v172, didSend: v71, from: v170 } = txn2;
    ;
    const v174 = stdlib.addressEq(v143, v170);
    stdlib.assert(v174, {
      at: './index.rsh:53:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Recipient'
      });
    const v175 = stdlib.digest([ctc1], [v171]);
    const v176 = stdlib.digestEq(v138, v175);
    stdlib.assert(v176, {
      at: './index.rsh:54:12:application',
      fs: [],
      msg: null,
      who: 'Recipient'
      });
    ;
    return;
    }
  
  
  
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
  appApproval: `ByAGAAECIHAFJgIBAAAiNQAxGEEBvylkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAL1JJAxAAFEkEkQjNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEQbFATbAyBjQDIQRbD0Q0/zEAEjQDV0ggMQASEUSxIrIBNAMlW7III7IQNP+yB7NCAOpIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVdIIDX/gWhbNf5JNQUXNf2ABNUVGRQ0/RZQsDIGSTT+D0Q0AyEEWwxENP8xABJENANXKCA0/RYBEkSxIrIBNAMlW7III7IQNP+yB7NCAIRIgaCNBogA6SI0ARJENARJIhJMNAISEURJNQVJSlcAIDX/JVs1/oEoWzX9VzAgNfyABL0nHlw0/1A0/hZQNP0WUDT8ULA0/ogApzT/NfsyBjT9CEk1+jT9IQUICDX5MQA0/hZQNPxQNPtQNPoWUDT5FlAoSwFXAHhnSCM1ATIGNQJCABwxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T0","name":"v246","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v248","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T3","name":"v250","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f62000bd438819003918201601f191660809081019290916001600160401b03841183851017620003fb578160a092849260409687528339810103126200041157815160a081016001600160401b03811182821017620003fb578352815181526020820151916001600160a01b0383168303620004115760208201928352838101518483015260806060820151916060840192835201516080830152436003558351602081019080821060018060401b03831117620003fb5790855260009052835192606084016001600160401b03811185821017620003fb578552600084526000602085015260008585015260ff6004541662000469577fe29e3d6fc3d8a76bea7703913ed0f9e529edcc20b9e5a9b7b84ffa4b21f79e6f60c086513381528551602082015260018060a01b038451168882015287860151606082015284516080820152608086015160a0820152a1825180159081156200045c575b501562000444578483015134036200042c57516001600160a01b03168352805162000189904362000481565b90816020850152516005810190818111620004165781106200041157620001b09162000481565b8284015282519060c082016001600160401b03811183821017620003fb5784526000602083015260008483015260608201926000845284608084019160008352608060a08601946000865233875283810151602088015201518286015260018060a01b038151168652602081015183520151825260019384600055438555858051943360208701526020810151828701520151606085015260018060a01b0390511660808401525160a08301525160c082015260c0815260e0810181811060018060401b03821117620003fb5783528051906001600160401b038211620003fb576002548381811c91168015620003f0575b6020821014620003da57601f81116200036d575b50602090601f83116001146200030257928293918392600094620002f6575b50501b916000199060031b1c1916176002555b5161073c9081620004988239f35b015192503880620002d5565b90601f1983169160026000528360206000209360005b87828210620003535750501062000339575b505050811b01600255620002e8565b015160001960f88460031b161c191690553880806200032a565b848601518755909501946020948501948793500162000318565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f840160051c81019160208510620003cf575b601f0160051c019084905b828110620003c2575050620002b6565b60008155018490620003b2565b9091508190620003a7565b634e487b7160e01b600052602260045260246000fd5b90607f1690620002a2565b634e487b7160e01b600052604160045260246000fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b845163100960cb60e01b815260096004820152602490fd5b845163100960cb60e01b815260086004820152602490fd5b905060015414386200015d565b845163100960cb60e01b815260076004820152602490fd5b919082019182811162000416578210620004115756fe608060409080825260049182361015610020575b505050361561001e57005b005b600091823560e01c90816313777274146102bb575080631e93b0f11461029d578063832307571461027f578063ab53f2c6146102105763f5a239bc03610013576020928360031936011261020c5782825161007a81610518565b5281519061008782610518565b8035825260ff8154166101f5577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a838051338152845188820152a160018454036101de576100e46100d6610549565b868082518301019101610617565b915180159081156101d2575b50156101bb5760a082015143106101a4573461018d5781516001600160a01b0391908216330361017f5760015b15610168575083808387829594839551169101519082821561015f575bf115610155578180558160015561014f610687565b51908152f35b51903d90823e3d90fd5b506108fc61013a565b602490601785519163100960cb60e01b8352820152fd5b33826060850151161461011d565b602490601684519163100960cb60e01b8352820152fd5b602490601584519163100960cb60e01b8352820152fd5b602490601484519163100960cb60e01b8352820152fd5b905060015414386100f0565b602490601384519163100960cb60e01b8352820152fd5b602490601284519163100960cb60e01b8352820152fd5b8280fd5b503461027b578160031936011261027b57815461022b610549565b91805193849283526020828185015284518093850152815b83811061026457505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610243565b5080fd5b503461027b578160031936011261027b576020906001549051908152f35b503461027b578160031936011261027b576020906003549051908152f35b90508160031936011261020c57806102d38492610518565b5280516001600160401b03818301818111838210176104cb57835284358252602094858301916024908135845260ff8354166104b5577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639246060875133815287518b820152865189820152a1600187540361049f57610360610352610549565b898082518301019101610617565b94518015908115610493575b501561047d57608085015143106104675760a0850151431015610451573461043b57606085019260018060a01b0394338686511603610425578787015190518851928b84019182528b845289840194848610908611176104135750838952825190200361040057505050848093878294839451169101519082821561015f57f115610155578180558160015561014f610687565b604460119163100960cb60e01b84520152fd5b634e487b7160e01b8b5260419052848afd5b875163100960cb60e01b81526010818401528490fd5b5090600f85519163100960cb60e01b8352820152fd5b5090600e85519163100960cb60e01b8352820152fd5b5090600d85519163100960cb60e01b8352820152fd5b5090600c85519163100960cb60e01b8352820152fd5b9050600154143861036c565b5090600b85519163100960cb60e01b8352820152fd5b5090600a85519163100960cb60e01b8352820152fd5b634e487b7160e01b855260418652602485fd5b90600182811c9216801561050e575b60208310146104f857565b634e487b7160e01b600052602260045260246000fd5b91607f16916104ed565b602081019081106001600160401b0382111761053357604052565b634e487b7160e01b600052604160045260246000fd5b60405190600060025461055b816104de565b8085526001918083169081156105df5750600114610599575b5050829003601f01601f191682016001600160401b0381118382101761053357604052565b600260009081526020935091836000805160206107108339815191525b8385106105cb57505050508301013880610574565b8054888601830152930192849082016105b6565b919250506020925060ff191682850152151560051b8301013880610574565b51906001600160a01b038216820361061257565b600080fd5b908160c0910312610612576040519060c08201906001600160401b038211838310176105335760a09160405261064c816105fe565b8352602081015160208401526040810151604084015261066e606082016105fe565b606084015260808101516080840152015160a082015290565b6106926002546104de565b8061069a5750565b601f81116001146106ad57506000600255565b6002600090815290600190601f0160051c600080516020610710833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf5b81811061070557505050602081208160025555565b83815582016106f056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 3028,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:36:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:53:76:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
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
