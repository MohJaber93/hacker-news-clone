import React from "react";
import Error from "next/error";
import fetch from "isomorphic-fetch";
import StoriesList from "../components/StoriesList/StoriesList";

const Home = ({ stories }) => {
  return !stories.hits?.length ? (
    <Error statusCode={503} title={"error 💔"} />
  ) : (
    <div>
      <h1>home page</h1>
      <StoriesList stories={stories} />
    </div>
  );
};

Home.getInitialProps = async () => {
  let stories;
  try {
    const response = await fetch("http://hn.algolia.com/api/v1/search?page=0");
    stories = await response.json();
  } catch (error) {
    stories = [];
  }

  return { stories };
};

export default Home;
