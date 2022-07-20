import React from "react";
import { Divider, Text } from "@chakra-ui/react";
const HomeCard = ({img,text}) => {
  return (
    <>
      <div className="col-md-9 col-9 mt-2 col-xs-9 col-lg-9 p-4 mx-auto home-content d-flex justify-content-between">
        <div className="img">
          <img
            src={img}
            alt="Picture Image"
          />
        </div>
        <div className="content mx-5">
          <Text size="lg" color="white" fontWeight="hairline">
            {text}
          </Text>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
