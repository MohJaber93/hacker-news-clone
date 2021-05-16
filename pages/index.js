import React from "react";
import Error from "next/error";
import fetch from "isomorphic-fetch";

const Home = ({ stories }) => {
  return !stories.hits?.length ? (
    <Error statusCode={503} title={"error 💔"} />
  ) : (
    <div>
      <h1>home page</h1>
      <div>
        {stories.hits?.map((story) => (
          <h3 key={story.objectID}>{story.title}</h3>
        ))}
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  let stories;
  try {
    const response = await fetch("http://hn.algolia.com/api/v1/search?page=1");
    stories = await response.json();
  } catch (error) {
    stories = [];
  }

  return { stories };
};

export default Home;
