"use strict";(self.webpackChunkimage_editor=self.webpackChunkimage_editor||[]).push([[5527],{5527:(a,e,t)=>{t.d(e,{relayOpenZeppelinTransaction:()=>c});var n=t(1578),r=t(65289),s=t(49343),i=t(6219);const o=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"}],d=[{name:"from",type:"address"},{name:"to",type:"address"},{name:"value",type:"uint256"},{name:"gas",type:"uint256"},{name:"nonce",type:"uint256"},{name:"data",type:"bytes"},{name:"chainid",type:"uint256"}];async function c(a){const{message:e,messageType:t,signature:c}=await async function(a){let{account:e,serializableTransaction:t,transaction:r,gasless:s}=a;const c=(0,n.P)({address:s.relayerForwarderAddress,chain:r.chain,client:r.client}),p=await(0,i.readContract)({contract:c,method:"function getNonce(address) view returns (uint256)",params:[e.address]}),[u,l]=await(async(a,n)=>{if(!t.to)throw new Error("OpenZeppelin transactions must have a 'to' address");if(!t.gas)throw new Error("OpenZeppelin transactions must have a 'gas' value");if(!t.data)throw new Error("OpenZeppelin transactions must have a 'data' value");if(s.experimentalChainlessSupport){const a={from:e.address,to:t.to,value:0n,gas:t.gas,nonce:p,data:t.data,chainid:BigInt(r.chain.id)};return[await e.signTypedData({domain:{name:"GSNv2 Forwarder",version:"0.0.1",verifyingContract:c.address},message:a,primaryType:"ForwardRequest",types:{ForwardRequest:d}}),a]}const i={from:e.address,to:t.to,value:0n,gas:t.gas,nonce:p,data:t.data};return[await e.signTypedData({domain:{name:null!==(a=s.domainName)&&void 0!==a?a:"GSNv2 Forwarder",version:null!==(n=s.domainVersion)&&void 0!==n?n:"0.0.1",chainId:r.chain.id,verifyingContract:c.address},message:i,primaryType:"ForwardRequest",types:{ForwardRequest:o}}),i]})();return{message:l,signature:u,messageType:"forward"}}(a),p=await fetch(a.gasless.relayerUrl,{method:"POST",body:(0,s.A)({request:e,type:t,signature:c,forwarderAddress:a.gasless.relayerForwarderAddress})});var u;if(!p.ok)throw null===(u=p.body)||void 0===u||u.cancel(),new Error("Failed to send transaction: ".concat(await p.text()));const l=await p.json();if(!l.result)throw new Error("Relay transaction failed: ".concat(l.message));const m=JSON.parse(l.result).txHash;if((0,r.q)(m))return{transactionHash:m,chain:a.transaction.chain,client:a.transaction.client};throw new Error("Failed to send transaction: ".concat((0,s.A)(l)))}}}]);
//# sourceMappingURL=5527.68faf060.chunk.js.map