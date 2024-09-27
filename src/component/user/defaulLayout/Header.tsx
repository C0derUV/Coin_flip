import { useEffect, useState } from "react";
import Index from "../../../container/Index";
import PagesIndex from "../../../container/PagesIndex";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

export default function Header() {
  const [isActive, setIsActive] = useState(false);


  const handleClick = () => {
    setIsActive((current) => !current);
    document.body.classList[isActive ? "remove" : "add"]("body-overflow");
  };
  useEffect(() => {
    const handleScroll = () => {
      const headerMain = document.getElementById("header-main");

      if (window.scrollY === 0) {
        headerMain?.classList.remove("sticky-header");
      } else {
        headerMain?.classList.add("sticky-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Index.Box className="header-main" id="header-main">
        <Index.Box className="container">
          <Index.Box className="header-row">
            <Index.Box className="header-cust-col">
              <Index.Box className="icon-wrapper">
                <Index.Box className="icon-flex">
                  <img src={PagesIndex.Svg.userIcon} alt="User" className="icons" />
                  <Index.Typography className="icon-text">Total Wish</Index.Typography>
                </Index.Box>
                <Index.Box className="icon-flex">
                  <img src={PagesIndex.Svg.whiteCoinIcon} alt="User" className="icons" />
                  <Index.Typography className="icon-text">Total Sol Distributed</Index.Typography>
                </Index.Box>
              </Index.Box>
            </Index.Box>
            <Index.Box className="header-cust-col">
              <Index.Box  className="border-btn-main header-btn-main"
              >
                <Index.Button className="border-btn">
                  <WalletMultiButton/>
            
                </Index.Button>
              </Index.Box>
            </Index.Box>
          </Index.Box>
        </Index.Box>
      </Index.Box>
    </>
  );
}
