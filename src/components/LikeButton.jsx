import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-section">
      <p>Current Likes: {likes}</p>
      <button onClick={handleLike} className="like-button">
        Like
      </button>
    </div>
  );
};

export default LikeButton;
