import { useWallet } from "@solana/wallet-adapter-react"
import { Connection } from "@solana/web3.js";
import {  useRef } from "react";

export const Airdrop=()=>{

  const wallet=useWallet();
  const inputRef=useRef();

  
  async function sendAirdropToUser(){
    try{
      if(!wallet.publicKey){
        alert("Please connect to Wallet First")
        return;
      }
      const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/CiNYCjCfB2N8xhLO4IU2drj2kbEHf6_p")

      const amount = Number(inputRef.current?.value || 0);

      if(amount<=0){
        alert("Please enter a valid amount");
        return;
      }
    
    await connection.requestAirdrop(wallet.publicKey, amount*1000000000)
    alert("airdropped");
    
  }catch(error){
    alert("Error: " + error.message)
  }
}

  return <div className="flex flex-col justify-center min-h-screen items-center px-4">

    <h1 className=" text-7xl transition-colors bg-gradient-to-r from-white to-gray-500 
    bg-clip-text text-transparent font-bold pb-2 ">Gucet</h1>
    <h2 className="text-xl text-white mb-4"> Free Airdrop SOL to your wallet!!</h2>

    <div className="flex flex-col gap-4 w-full max-w-md items-center justify-between">
    <input className="w-full h-12 bg-gray-700 rounded-xl px-4 text-white 
                   placeholder-gray-400 focus:outline-none focus:ring-1 
                   focus:ring-purple-500" type="text" ref={inputRef} 
                   placeholder="Enter SOL"
                   step="0.1"
                   min="0"/>

    <button className="w-35  h-12 bg-purple-600 rounded-xl text-white font-medium
                   hover:bg-purple-700 transition-colors disabled:opacity-50" 
                   onClick={sendAirdropToUser}>Airdrop SOL</button>

    </div>

  
  </div>

}

