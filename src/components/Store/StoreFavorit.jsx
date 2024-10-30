/*
import React, { useState } from 'react';

function StoreFavorit() {
  const [isLiked, setIsLiked] = useState(false);
  const likeToggle = () => {
    setIsLiked(prevIsLiked => !prevIsLiked);
  };

  return (
    <div className='likeToggleContainer' onClick={likeToggle}>
      {isLiked ? (
        <img src="/heart-filled.svg" alt="Heart-liked" />
      ) : (
        <img src="/heart.svg" alt="Heart-like" />
      )}
    </div>
  );
}

export default StoreFavorit;
*/

import React from 'react';

function StoreFavorit({ isFavorite, onToggle }) {
  return (
    <div className='likeToggleContainer' onClick={onToggle}>
      {isFavorite ? (
        <img src="/heart-filled.svg" alt="Heart-liked" />
      ) : (
        <img src="/heart.svg" alt="Heart-like" />
      )}
    </div>
  );
}

export default StoreFavorit;