// Made by: Anders
import { useState, useEffect } from 'react';

export function useFavoriteStores() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteStores');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (address: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(address)
        ? prev.filter(storedAddress => storedAddress !== address)
        : [...prev, address];
      
      localStorage.setItem('favoriteStores', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (address: string) => favorites.includes(address);

  return { favorites, toggleFavorite, isFavorite };
}