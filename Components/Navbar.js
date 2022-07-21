import Link from "next/link";
import React, { useContext } from "react";
import styles from "./footer.module.css";
import { MovieContextProvider } from "../utils/Context";
import { Button, Divider } from "@chakra-ui/react";
const Navbar = () => {
  const { isConnectWallet, currentAccount, connection, isAdmin, admin } =
    useContext(MovieContextProvider);

  return (
    <>
      <div
        className={styles["copyright-area"]}
        style={{ backgroundColor: "#151414 !important" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className={`${styles["copyright-text"]} `}>
                <p>
                  <Link href="https://codepen.io/anupkumar92/" className="mx-2">
                    {admin ?   "Owner Address :" + "  " + admin: "Loading..."}
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className={styles["footer-menu"]}>
                <ul style={{ color: "#ff5e14 !important" }}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12 col-12 col-xs-12 mx-auto d-flex justify-content-between">
            <div className={styles["footer-logo"]}>
              <img
                src="https://i.ibb.co/QDy827D/ak-logo.png"
                className="img-fluid"
                alt="logo"
              />
            </div>

            <div className="links">
              {isAdmin? <Button style={{ backgroundColor: "#ff5e14" }} disabled>Admin</Button>:<Button style={{ backgroundColor: "#ff5e14" }} disabled>User</Button>}
              <Button
                isLoading={!isConnectWallet}
                spinnerPlacement="start"
                style={{ backgroundColor: "#ff5e14" }}
                onClick={connection}
              >
                {isConnectWallet
                  ? currentAccount.substr(0, 5) +
                    "..." +
                    currentAccount.substr(37, 41)
                  : "Connect Wallet"}
              </Button>
              {isConnectWallet ? (
                <Button colorScheme="whatsapp">
                  <Link href="/movies">View Movies</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
        <Divider variant="dashed" />
      </div>
    </>
  );
};

export default Navbar;
