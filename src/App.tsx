import "./assets/style/global.css";
import "./assets/style/global.responsive.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routes from "./routes/Routes";
import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import process from 'process';
window.process = process; 

function App() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Inter, sans-serif",
        fontWeight: "400",
        lineHeight: "normal",
      },
    },
  });
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <div className="App">
              <Routes />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
}

export default App;
