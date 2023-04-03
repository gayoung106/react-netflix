import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Recommendation = () => {
  return (
    <>
      <Main />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  );
};

export default Recommendation;
