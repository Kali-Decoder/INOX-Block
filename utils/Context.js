import React, { useState, useEffect, createContext } from "react";
export const MovieContextProvider = createContext();
import getWeb3 from "./web3";
import getContract from "./contract";
const MovieContext = ({ children }) => {
  const [isConnectWallet, setIsConnectWallet] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [admin, setAdmin] = useState("");
  async function connection() {
    let web3 = await getWeb3();
    let accounts = await web3.eth.getAccounts();
    accounts.length != 0 ? setIsConnectWallet(true) : setIsConnectWallet(false);

    let contract = await getContract();

    if (contract) {
      let admin = await contract.methods.owner().call();
      setAdmin(admin);
      admin === currentAccount ? setIsAdmin(true) : setIsAdmin(false);
    }

    setCurrentAccount(accounts[0]);
  }
  useEffect(() => {
    connection();
    return () => {
      console.log("This will be logged on unmount");
    };
  }, [currentAccount]);
  return (
    <>
      <MovieContextProvider.Provider
        value={{ isConnectWallet, currentAccount, connection, isAdmin, admin }}
      >
        {children}
      </MovieContextProvider.Provider>
    </>
  );
};

export default MovieContext;
