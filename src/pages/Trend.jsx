import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Trend = () => {
  return (
    <>
      <Main />
      <Row
        rowID="6"
        title="NEW ! 최신 컨텐츠 "
        fetchURL={requests.requestTrend}
      />
    </>
  );
};

export default Trend;
