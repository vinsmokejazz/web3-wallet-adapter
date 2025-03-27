
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton, WalletConnectButton } from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"
import '@solana/wallet-adapter-react-ui/styles.css';
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { Airdrop } from "./components/Airdrop";

function App() {


  return (
    <div className="bg-slate-800 min-h-screen">
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/CiNYCjCfB2N8xhLO4IU2drj2kbEHf6_p"}>
        <WalletProvider wallets={[new UnsafeBurnerWalletAdapter]}>
          <WalletModalProvider>
            <div className="fixed top-4 right-4 flex gap-2"> 
              <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 !rounded-xl" />
            <WalletDisconnectButton  className="!bg-gray-600 hover:!bg-gray-700 !rounded-xl"/> 
            </div>
            

            <Airdrop />

          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>

  )
}

export default App
