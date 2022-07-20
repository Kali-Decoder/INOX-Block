import React from "react";
import { Text, Kbd, Code, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Link from "next/link";
const MovieCard = ({ item }) => {
  return (
    <>
      <div className="card p-3 mt-2" style={{ background: "#151414" }}>
        <Text
          size="lg"
          fontWeight="hairline"
          color="white"
          className="movie-head"
        >
          {item["Title"]}
        </Text>
        <div className="card-img">
          <img src={item["Images"][0]} alt="image" />
        </div>
        <div className="mt-1 d-flex justify-content-between">
          <kbd>{item["Genre"]}</kbd>
        </div>
        <Text className="desc">{item["Plot"]}</Text>

        <div className="text-right mt-2">
          <Button variant="solid" colorScheme="telegram">
            <Link href={`/booking/${item["id"]}`}>
              <CheckIcon />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
