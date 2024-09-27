import Index from "../../Index";
import PagesIndex from "../../PagesIndex";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
import { Program, AnchorProvider, utils, BN } from "@project-serum/anchor";
import * as anchor from "@project-serum/anchor";
import idl from "../../../idl/coinflippy.json"; 
import { useWallet } from "@solana/wallet-adapter-react";

export default function Home() {
  const [winners, setWinners] = useState([]);
  const [solReceived, setSolReceived] = useState([]);
  const [participants, setParticipants] = useState([]);
  const wallet = useWallet(); 
  const connection = useMemo(
    () => new Connection(clusterApiUrl("devnet"), "confirmed"),
    [] 
  );

  const programID = useMemo(() => new PublicKey(idl.metadata.address), []); 

  const STATE_SEEDS = useMemo(() => utils.bytes.utf8.encode("state"), []);
  const ROUND_SEEDS = useMemo(() => utils.bytes.utf8.encode("round"), []);

  const fallbackProvider = useMemo(() => {
    return new AnchorProvider(
      connection,
      { publicKey: null, signAllTransactions: async () => [], signTransaction: async () => null }, 
      AnchorProvider.defaultOptions()
    );
  }, [connection]);

  const provider = useMemo(() => {
    if (wallet && wallet.connected && wallet.publicKey) {
      return new AnchorProvider(
        connection,
        wallet,
        AnchorProvider.defaultOptions()
      );
    }
    return fallbackProvider;
  }, [wallet, connection, fallbackProvider]);

  const program = useMemo(() => {
    if (!provider) return null;
    return new Program(idl, programID, provider);
  }, [provider, programID]);

  const fetchRoundData = useCallback(async () => {
    if (!program) return; 

    try {
      const admin = new PublicKey(
        "doGqrWF94feTv6agyW14kPsbetbWrhnUBea5r2eCDFd"
      ); 
      const [statePDA] = PublicKey.findProgramAddressSync(
        [STATE_SEEDS, admin.toBuffer()],
        programID
      );

      const stateData = await program.account.state.fetch(statePDA);
      const currentRound = stateData.currentRound;

      const [roundPDA] = PublicKey.findProgramAddressSync(
        [
          ROUND_SEEDS,
          new BN(currentRound).toArrayLike(Buffer, "le", 8),
          admin.toBuffer(),
        ],
        programID
      );

      const roundAccount = await program.account.round.fetch(roundPDA);
      const participantsList = roundAccount.participants.map((participant) =>
        participant.toBase58()
      );

      setParticipants((prevParticipants) => {
        if (JSON.stringify(prevParticipants) !== JSON.stringify(participantsList)) {
          return participantsList;
        }
        return prevParticipants;
      });

      if (!roundAccount.winners || roundAccount.winners.length === 0) {
        setWinners([]);
        setSolReceived([]);
        return;
      }

      const winnersList = roundAccount.winners.map((winner) =>
        winner.toBase58()
      );

      const totalCollectedBN = new BN(roundAccount.totalDistributed);
      const totalCollected = totalCollectedBN.toNumber();

      const solReceivedList = winnersList.map((_, index) => {
        const percentages = [50, 30, 20];
        const amountInLamports = (percentages[index] / 100) * totalCollected;
        return amountInLamports / anchor.web3.LAMPORTS_PER_SOL;
      });

      setWinners((prevWinners) => {
        if (JSON.stringify(prevWinners) !== JSON.stringify(winnersList)) {
          return winnersList;
        }
        return prevWinners;
      });

      setSolReceived((prevSolReceived) => {
        if (JSON.stringify(prevSolReceived) !== JSON.stringify(solReceivedList)) {
          return solReceivedList;
        }
        return prevSolReceived;
      });
    } catch (error) {
      console.error("Error fetching round data:", error);
    }
  }, [program, programID, STATE_SEEDS, ROUND_SEEDS]);

  useEffect(() => {
    if (program) {
      fetchRoundData();
    }
  }, [program, fetchRoundData]);

  return (
    <>
      <Index.Box className="home-main">
        <PagesIndex.HeroSection />
        <PagesIndex.LastWinners winners={winners} solReceived={solReceived} />
        <PagesIndex.RecentPlays participants={participants} />
      </Index.Box>
    </>
  );
}
