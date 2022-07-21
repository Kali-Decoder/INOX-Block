import React from "react";
import MovieCard from "../utils/MovieCard";
import {Text,Divider} from '@chakra-ui/react';
import { data } from "../DummyData";
const BookTicket = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-3 mb-4">
          <div className="col-md-12 col-12 mx-auto text-center">
            <Text color="white" fontSize={50} fontWeight={60} >Book Ticket For Your Favourite Movie</Text>
          </div>
        </div>
        <div className="row mt-3">
          {data.length != 0
            ? data.map((item, i) => (
                <div className="col-md-3 col-12 col-lg-3 mx-auto" key={i}>
                  {" "}
                  <MovieCard item={item} key={i} />
                </div>
              ))
            : "Loading..."}
        </div>
        <Divider variant="dashed" className="mt-4 mb-5" />
      </div>
    </>
  );
};

export default BookTicket;
