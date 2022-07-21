import React, { useContext, useEffect } from "react";
import { Badge, Divider, Text, Spinner } from "@chakra-ui/react";
import styles from "./seat.module.css";
const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const primes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19];
import { MovieContextProvider } from "./Context";

const SeatArrangementCard = ({ title, movieId, ids }) => {
  const { isLoad, bookTicket } = useContext(MovieContextProvider);
  let tickets = ids? ids.length !== 0 ? ids : [0] :[0];

  return (
    <>
      <div className="container">
        <div className={styles["container"]}>
          <div className={`${styles["screen"]} mb-5`}></div>
          <div className="row mt-3 mb-4">
            <div className="col-md-12 col-12 mx-auto text-center">
              <Text color="white" fontSize={50} fontWeight={60}>
                Movie : {title}
              </Text>
            </div>
          </div>
          <div className="info d-flex justify-content-around mb-5">
            <Badge variant="solid" colorScheme="purple">
              PRIME
            </Badge>
            <Badge variant="solid" colorScheme="yellow">
              CLASSIC PLUS
            </Badge>
            <Badge variant="solid" colorScheme="blue">
              CLASSIC
            </Badge>
            <Badge variant="solid" colorScheme="orange">
              BOOKED
            </Badge>
          </div>
          {isLoad ? (
            <div className=" mb-2">
              <Spinner size="xl" color="red.500" />
            </div>
          ) : null}
          {/* //Classic  */}
          <div className={`${styles["row"]} ${styles["classic"]}`}>
            {seats.map((seat, id) => (
              <div
                className={`${styles["seat"]} ${
                  tickets.filter((i) => i == id + 1).length != 0
                    ? styles["occupied"]
                    : null
                }`}
                key={id + 1}
                onClick={() => {
                  bookTicket(movieId, id + 1, 3, title);
                }}
              ></div>
            ))}
          </div>
          <div className={`${styles["row"]} ${styles["classic"]}`}>
            {seats.map((seat, id) => (
              <div
                className={`${styles["seat"]} ${
                  tickets.filter((i) => i == id + 13).length != 0
                    ? styles["occupied"]
                    : null
                }`}
                key={id + 13}
                onClick={() => {
                  bookTicket(movieId, id + 13, 3, title);
                }}
              ></div>
            ))}
          </div>

          {/* //Classic Plus */}
          <div className={`${styles["row"]} ${styles["classic_plus"]}`}>
            {seats.map((seat, id) => (
              <div
                className={`${styles["seat"]} ${
                  tickets.filter((i) => i == id + 25).length != 0
                    ? styles["occupied"]
                    : null
                }`}
                key={id + 25}
                onClick={() => {
                  bookTicket(movieId, id + 25, 2, title);
                }}
              ></div>
            ))}
          </div>
          <div className={`${styles["row"]} ${styles["classic_plus"]}`}>
            {seats.map((seat, id) => (
              <div
                className={`${styles["seat"]} ${
                  tickets.filter((i) => i == id + 38).length != 0
                    ? styles["occupied"]
                    : null
                }`}
                key={id + 38}
                onClick={() => {
                  bookTicket(movieId, id + 38, 2, title);
                }}
              ></div>
            ))}
          </div>

          {/* //Prime  */}
          <div className={`${styles["row"]} ${styles["prime"]}`}>
            {primes.map((seat, id) => (
              <div
                className={`${styles["seat"]} ${
                  tickets.filter((i) => i == id + 58).length != 0
                    ? styles["occupied"]
                    : null
                }`}
                key={id + 58}
                onClick={() => {
                  bookTicket(movieId, id + 58, 1, title);
                }}
              ></div>
            ))}
          </div>
          <div className={`${styles["row"]} ${styles["prime"]}`}>
            {primes.map((seat, id) => (
              <div
                className={`${styles["seat"]} ${
                  tickets.filter((i) => i == id + 78).length != 0
                    ? styles["occupied"]
                    : null
                }`}
                key={id + 78}
                onClick={() => {
                  bookTicket(movieId, id + 78, 1, title);
                }}
              ></div>
            ))}
            {/* <div className={`${styles["seat"]} ${styles["occupied"]}`}></div> */}
          </div>
        </div>
      </div>
      <Divider variant="dashed" className="mt-4" />
    </>
  );
};

export default SeatArrangementCard;
