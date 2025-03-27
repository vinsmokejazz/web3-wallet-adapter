
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets"
import { WalletModalProvider, WalletDisconnectButton,WalletMultiButton, WalletConnectButton } from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"
import '@solana/wallet-adapter-react-ui/styles.css';
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { Airdrop } from "./components/Airdrop";

function App() {


  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/CiNYCjCfB2N8xhLO4IU2drj2kbEHf6_p"}>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>
          <WalletMultiButton/>
          <WalletDisconnectButton/>

          <Airdrop/>

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
