import React, { useEffect, useState, useContext } from "react";
import SeatArrangementCard from "../../utils/SeatArrangementCard";
import { useRouter } from "next/router";
import { data } from "../../DummyData";
import { MovieContextProvider } from "../../utils/Context";
const BookingPage = () => {
  const { getIds } = useContext(MovieContextProvider);
  const [ids, setIds] = useState([]);
  const router = useRouter();
  let id = router.query.id;
  let filterData = data.filter((item) => item["id"] == id);
  const getBookings = async () => {
    let tickets = await getIds(id);

    setIds(tickets);
    // console.log("ids",ids);
  };
  useEffect(() => {
    getBookings();
  }, [id]);
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <>
      <SeatArrangementCard
        movieId={id}
        ids={ids}
        title={filterData.length != 0 ? filterData[0]["Title"] : ""}
      />
    </>
  );
};

export default BookingPage;
