import { useWallet } from "@solana/wallet-adapter-react"
import { Connection } from "@solana/web3.js";
import {  useRef } from "react";

export const Airdrop=()=>{

  const wallet=useWallet();
  const inputRef=useRef();

  
  async function sendAirdropToUser(){
    try{
      const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/CiNYCjCfB2N8xhLO4IU2drj2kbEHf6_p")
      const amount = Number(inputRef.current?.value || 0);
    
    await connection.requestAirdrop(wallet.publicKey, amount*1000000000)
    alert("airdropped");
  }catch(error){
    alert("Error: " + error.message)
  }
}

  return <div>

    <input type="text" ref={inputRef} placeholder="Amount"/>
    <button onClick={sendAirdropToUser}>send SOL</button>
  </div>

}

