import React from "react";

const StoriesList = ({ stories }) => {
  return (
    <div className="story-list">
      {stories.hits?.map((story) => (
        <div key={story.objectID} className="story-item">
          <div>
            <a href={story.url}>{story.title || story.story_text}</a>
          </div>
          <div>
            <span>{story.points || 0} points</span>
            <span> by {story.author} </span>
            <span>{story.num_comments || 0} comments</span>
          </div>
        </div>
      ))}
      <style jsx>{`
        .story-list {
        }

        .story-item {
        }
      `}</style>
    </div>
  );
};

export default StoriesList;
