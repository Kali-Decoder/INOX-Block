import React from "react";
import { Badge, Divider,Text } from "@chakra-ui/react";
import styles from "./seat.module.css";
const SeatArrangementCard = ({ title }) => {
  return (
    <>
      <div className="container">
        <div className={styles["container"]}>
          <div className={`${styles["screen"]} mb-5`}></div>
          <div className="row mt-3 mb-4">
            <div className="col-md-12 col-12 mx-auto text-center">
              <Text color="white" fontSize={50} fontWeight={60}>
                {title}
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

          {/* //Classic  */}
          <div className={`${styles["row"]} ${styles["classic"]}`}>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
          </div>
          <div className={`${styles["row"]} ${styles["classic"]}`}>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
          </div>

          {/* //Classic Plus */}
          <div className={`${styles["row"]} ${styles["classic_plus"]}`}>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
          </div>
          <div className={`${styles["row"]} ${styles["classic_plus"]}`}>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
          </div>

          {/* //Prime  */}
          <div className={`${styles["row"]} ${styles["prime"]}`}>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
          </div>
          <div className={`${styles["row"]} ${styles["prime"]}`}>
            <div className={styles["seat"]}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={`${styles["seat"]} ${styles["occupied"]}`}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
            <div className={styles["seat"]}></div>
          </div>
        </div>
      </div>
      <Divider variant="dashed" className="mt-4" />
    </>
  );
};

export default SeatArrangementCard;
