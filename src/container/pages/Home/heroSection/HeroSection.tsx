import Index from "../../../../container/Index";
import PagesIndex from "../../../../container/PagesIndex";
import React, { useState, useMemo, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import idl from "../../../../idl/coinflippy.json";
import {
  Connection,
  PublicKey,
  clusterApiUrl,
  SystemProgram,
} from "@solana/web3.js";
import {
  AnchorProvider,
  Program,
  web3,
  BN,
  utils,
} from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import { Buffer } from "buffer";

// window.Buffer = Buffer;

export default function HeroSection() {
  const [totalParticipants, setTotalParticipants] = useState(0);

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const wallet = useWallet();

  const STATE_SEEDS = utils.bytes.utf8.encode("state");
  const ROUND_SEEDS = utils.bytes.utf8.encode("round");
  const programID = new PublicKey(idl.metadata.address);

  const fallbackProvider = useMemo(() => {
    return new AnchorProvider(
      connection,
      { publicKey: null, signAllTransactions: async () => [], signTransaction: async () => null }, 
      AnchorProvider.defaultOptions()
    );
  }, [connection]);

  const provider = useMemo(() => {
    if (wallet && wallet.connected) {
      return new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
    }
    return fallbackProvider;
  }, [wallet, connection, fallbackProvider]);

  const program = useMemo(() => {
    if (provider) {
      return new Program(idl, programID, provider);
    }
  }, [provider]);

  const fetchRoundData = async () => {
    try {
      const admin = new PublicKey(
        "doGqrWF94feTv6agyW14kPsbetbWrhnUBea5r2eCDFd"
      ); // Admin public key

      // Step 1: Find the `state_pda`
      const [statePDA] = anchor.web3.PublicKey.findProgramAddressSync(
        [STATE_SEEDS, admin.toBuffer()],
        programID
      );

      // Step 2: Fetch the `state` account data
      const stateData = await program.account.state.fetch(statePDA);
      const currentRound = stateData.currentRound;

      // Step 3: Find the `round_pda` using `statePDA` and `currentRound`
      const [roundPDA] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          ROUND_SEEDS,
          new anchor.BN(currentRound).toArrayLike(Buffer, "le", 8),
          admin.toBuffer(),
        ],
        programID
      );

      // Step 4: Fetch the current round data to get total participants
      const roundAccount = await program.account.round.fetch(roundPDA);
      setTotalParticipants(roundAccount.totalParticipants.toNumber());
    } catch (error) {
      console.error("Error fetching round data:", error);
    }
  };

  useEffect(() => {
    fetchRoundData();
  });

  const participate = async () => {
    if (!wallet || !wallet.publicKey) {
      console.error("Wallet not connected");
      try {
        await wallet.connect();
      } catch (error) {
        console.error("Error connecting wallet:", error);
        alert("Error connecting to wallet. Please try again.");
        return;
      }
    }

    try {
      const admin = new PublicKey(
        "doGqrWF94feTv6agyW14kPsbetbWrhnUBea5r2eCDFd"
      ); // Admin public key

      // Step 1: Find the `state_pda`
      const [statePDA] = anchor.web3.PublicKey.findProgramAddressSync(
        [STATE_SEEDS, admin.toBuffer()],
        programID
      );

      // Step 2: Fetch the `state` account data
      const stateData = await program.account.state.fetch(statePDA);

      // Step 3: Get the current round number from the state
      const currentRound = stateData.currentRound;

      // Step 4: Find the `round_pda` using `statePDA` and `currentRound`
      const [roundPDA] = anchor.web3.PublicKey.findProgramAddressSync(
        [
          ROUND_SEEDS,
          new anchor.BN(currentRound).toArrayLike(Buffer, "le", 8),
          admin.toBuffer(),
        ],
        programID
      );

      // Step 5: Check if the round account exists
      const roundAccountInfo = await connection.getAccountInfo(roundPDA);
      if (!roundAccountInfo) {
        console.error("Round account does not exist at: ", roundPDA.toBase58());
        alert("Round account does not exist. Please start the round first.");
        return;
      }

      // Step 6: Fetch the current round data to check if the round is active
      const roundAccount = await program.account.round.fetch(roundPDA);

      if (!roundAccount.isActive) {
        alert("The round is not currently active. Please try again later.");
        return;
      }

      const amount = 0.05;
      // Step 7: Convert the input amount from SOL to lamports
      const amountInLamports = new anchor.BN(amount * web3.LAMPORTS_PER_SOL);

      // Step 8: Create the instruction for participation with the specified amount
      let tx = await program.methods
        .participate(amountInLamports)
        .accounts({
          admin: admin,
          participant: wallet.publicKey, // The user participating
          state: statePDA, // The state account
          round: roundPDA, // The current round account
          systemProgram: anchor.web3.SystemProgram.programId, // System program
        })
        .instruction();

      // Step 9: Create the transaction and send it
      const transaction = new web3.Transaction().add(tx);

      const signature = await provider.sendAndConfirm(transaction);
      alert("Participation successful!");
    } catch (err) {
      console.error("Error during participation: ", err);
      alert("An error occurred during participation. Please try again.");
    }
  };

  // const [hours, setHours] = useState<number>(2);
  // const [minutes, setMinutes] = useState<number>(25);
  // const [seconds, setSeconds] = useState<number>(45);
  // const [animate, setAnimate] = useState<boolean>(false);

  // useEffect(() => {
  //       const interval = setInterval(() => {
  //             setAnimate(true);
  //             setTimeout(() => {
  //                   setAnimate(false);
  //             }, 500);

  //             if (seconds > 0) {
  //                   setSeconds(prev => prev - 1);
  //             } else if (minutes > 0) {
  //                   setMinutes(prev => prev - 1);
  //                   setSeconds(59);
  //             } else if (hours > 0) {
  //                   setHours(prev => prev - 1);
  //                   setMinutes(59);
  //                   setSeconds(59);
  //             }
  //       }, 1000);

  //       return () => clearInterval(interval);
  // }, [hours, minutes, seconds]);

  return (
    <>
      <Index.Box className="hero-section">
        <Index.Box className="container">
          <Index.Box className="hero-content-main">
            {/* <Index.Box className="timer-main">
                                          <Index.Box className="timer-flex">
                                                <Index.Box className="time-box">
                                                      <Index.Typography id="hours" className="time-text">
                                                            {String(hours).padStart(2)}
                                                      </Index.Typography>
                                                      <Index.Typography className="time-label">HOURS</Index.Typography>
                                                </Index.Box>
                                                <Index.Box className="time-box">
                                                      <Index.Box className="colon-img-box">
                                                            <img src={PagesIndex.Svg.colunIcon} alt="Colun" className="colon-img" />
                                                      </Index.Box>
                                                </Index.Box>
                                                <Index.Box className="time-box">
                                                      <Index.Typography id="minutes" className="time-text">
                                                            {String(minutes).padStart(2, '0')}
                                                      </Index.Typography>
                                                      <Index.Typography className="time-label">MINUTES</Index.Typography>
                                                </Index.Box>
                                                <Index.Box className="time-box">
                                                      <Index.Typography className="colon-img-box">
                                                            <img src={PagesIndex.Svg.colunIcon} alt="Colun" className="colon-img" />
                                                      </Index.Typography>
                                                </Index.Box>
                                                <Index.Box className="time-box">
                                                      <Index.Box className="time-box">
                                                            <div className="digits-container">
                                                                  <Index.Typography className="time-text">
                                                                        {String(seconds).padStart(2, '0')[0]} 
                                                                  </Index.Typography>
                                                                  <div className="last-digit-wrapper">
                                                                        <div className={`digit current-digit ${animate ? 'slide-up' : ''}`}>
                                                                              <Index.Typography className="time-text">{String(seconds).padStart(2, '0')[1]}</Index.Typography> 
                                                                        </div>
                                                                        <div className={`digit next-digit ${animate ? 'slide-down' : ''}`}>
                                                                              <Index.Typography className="time-text">{String((seconds === 0 ? 9 : seconds - 1).toString().padStart(2, '0')[1])}</Index.Typography> 
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </Index.Box>
                                                      <Index.Typography className="time-label">SECONDS</Index.Typography>
                                                </Index.Box>

                                          </Index.Box>
                                    </Index.Box> */}
            <PagesIndex.RollingCounter />
            <Index.Typography className="hero-heading">
              Wishing Wallet
            </Index.Typography>
            <Index.Typography className="hero-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Index.Typography>
            <img src={PagesIndex.Svg.hero} alt="" className="hero-img" />
            <Index.Box className="hero-btn-main primary-btn-main">
              {/* <Index.Button className="hero-btn primary-btn">Throw A Coin</Index.Button> */}

              <Index.Button
                className="hero-btn primary-btn"
                onClick={participate}
              >
                Throw A Coin
              </Index.Button>
            </Index.Box>
            <Index.Box className="hero-icon-main">
              <Index.Box className="icon-wrapper">
                <Index.Box className="icon-flex">
                  <img
                    src={PagesIndex.Svg.userIcon}
                    alt="User"
                    className="icons"
                  />
                  <Index.Typography className="icon-text">
                    Total Wish
                  </Index.Typography>
                </Index.Box>
                <Index.Box className="icon-flex">
                  <img
                    src={PagesIndex.Svg.whiteCoinIcon}
                    alt="User"
                    className="icons"
                  />
                  <Index.Typography className="icon-text">
                    Total Sol Distributed
                  </Index.Typography>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
      <Index.Box className="hero-card-section">
        <Index.Box className="container">
          <Index.Box className="hero-cards-main">
            <Index.Box className="hero-cards">
              <Index.Typography className="hero-card-digit">
                {totalParticipants}
              </Index.Typography>
              <Index.Typography className="hero-card-digit-title">
                Total Participants
              </Index.Typography>
            </Index.Box>
            <Index.Box className="hero-cards">
              <Index.Typography className="hero-card-digit">
                {totalParticipants * 0.05}
              </Index.Typography>
              <Index.Typography className="hero-card-digit-title">
                Total SoL
              </Index.Typography>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
