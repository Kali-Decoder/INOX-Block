import React, { useContext } from "react";
import Title from "../Components/Title";
import { Divider, Text } from "@chakra-ui/react";
import HomeCard from "../utils/HomeCard";

const HomePage = () => {
 
  return (
    <>
      <Title
        title="Decentralised Theatre "
        name="Theatre Home"
        desc="Rendering Movies For Bookings tickets "
      />
      <div className="container">
        
        <div className="row mt-4 mb-4">
          <HomeCard
            img="https://static.spotboye.com/uploads/mirzapur_2020-1-29-9-42-50_thumbnail.jpg"
            text="Amazon Original’s crime thriller web series Mirzapur left fans
            hooked and craving for more soon after it ended. If you were one of
            those who binged on the first season, there’s absolutely no doubt
            that you are eagerly waiting for its second season to release. The
            first season premiered in November 2018 and it has been more than a
            year now. So of course fans went berserk after Amazon Prime Video
            confirmed the season 2 premiere in 2020. The first season of
            Mirzapur starred Pankaj Tripathi, Ali Fazal, Divyendu Sharma,
            Vikrant Massey, Rasika Duggal, Shweta Tripathi and Shriya Pilgaonkar
            in the lead roles."
          />
          <HomeCard
            img="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/08/02/956600-money.jpg"
            text="The gripping Spanish show made its debut in 2017 and was a huge success among fans all over the world. Unfortunately, the fifth season will be the last and final season of the iconic show.

For the unversed, the series narrates a story about a mastermind named The Professor, who gathers a team of specialists to carry out the biggest heist ever performed. Essentially, he wants to print millions of Euros in the Royal Mint of Spain. "
          />
        </div>
        <Divider variant="dashed" />
      </div>
    </>
  );
};

export default HomePage;
