import React, { useState, useEffect, createContext } from "react";
export const MovieContextProvider = createContext();
import getWeb3 from "./web3";
import getContract from "./contract";
const MovieContext = ({ children }) => {
  const [isConnectWallet, setIsConnectWallet] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [admin, setAdmin] = useState("");
  const [isLoad, setLoad] = useState(false);
  const bookTicket = async (movieId, seatId, typeId, name) => {
    setLoad(true);
    try {
      let contract = await getContract();
      let price;
      if (typeId == 2) {
        price = 180;
      } else if (typeId == 3) {
        price = 150;
      } else {
        price = 280;
      }
      let tx = await contract.methods
        .bookTicket(movieId, seatId, typeId, name)
        .send({ from: currentAccount, value: price });

      // getIds(movieId);
    } catch (error) {
      console.log(error);
    }

    setLoad(false);
  };
  const getIds = async (id) => {
    let contract = await getContract();
    try {
      let ids = await contract.methods.returnAllBooksIds(id).call();
      return ids;
    } catch (error) {
      console.log(error);
    }
  };
  async function connection() {
    let web3 = await getWeb3();
    let accounts = await web3.eth.getAccounts();
    // console.log(accounts);
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
  }, []);
  return (
    <>
      <MovieContextProvider.Provider
        value={{
          isConnectWallet,
          currentAccount,
          connection,
          isAdmin,
          admin,
          isLoad,
          bookTicket,
          getIds,
        }}
      >
        {children}
      </MovieContextProvider.Provider>
    </>
  );
};

export default MovieContext;
