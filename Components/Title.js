import Head from "next/head";
import React from "react";

const Title = ({title,name,desc}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta  name={name} description={desc} />
      </Head>
    </>
  );
};

export default Title;
