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

  return <div className="flex flex-col justify-center min-h-screen items-center ">

    <h1 className=" text-7xl transition-colors bg-gradient-to-r from-white to-gray-500 
    bg-clip-text text-transparent font-bold pb-2 ">Gucet</h1>
    <h2 className="text-xl text-white pb-4"> Free Airdrop SOL to your wallet!!</h2>

    <input className="w-md h-12 bg-gray-100  rounded-2xl mb-3 items-center p-4" type="text" ref={inputRef} placeholder="Enter SOL"/>
    <button className="bg-purple-800 w-30 h-10 rounded-2xl text-white items-center" onClick={sendAirdropToUser}>Airdrop SOL</button>
  </div>

}

