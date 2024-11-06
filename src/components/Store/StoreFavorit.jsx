/* Lavet af Anders */
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