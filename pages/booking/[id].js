import React from "react";
import SeatArrangementCard from "../../utils/SeatArrangementCard";
import { useRouter } from "next/router";
import { data } from "../../DummyData";
const BookingPage = () => {
  const router = useRouter();
  let id = router.query.id;
  let filterData = data.filter((item) => item["id"] == id);
  // console.log(filterData);
  return (
    <>
      <SeatArrangementCard
        title={filterData.length != 0 ? filterData[0]["Title"] : ""}
      />
    </>
  );
};

export default BookingPage;
