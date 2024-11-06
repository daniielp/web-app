/* Lavet af Daniel */
/* Lavet af Anders */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typography from '../Typography';
import { cn } from '../../lib/utils';
import StoreFavorit from './StoreFavorit';
import { ArrowLeftIcon } from "lucide-react";
import { useFavoriteStores } from '../../hooks/useFavoriteStores';

interface ShopCardProps extends React.InputHTMLAttributes<HTMLDivElement> {
  shopName: string;
  shopAddress?: string;
  opensAt: string;
  closesAt: string;
  showBackButten?: boolean;
  showFavoritButten?: boolean;
}

function ShopCard({
  shopName,
  shopAddress,
  opensAt,
  closesAt,
  className,
  showBackButten = false,
  showFavoritButten = false,
  ...props
}: ShopCardProps) {
  const { toggleFavorite, isFavorite } = useFavoriteStores();



  return (
    <div
      className={cn(
        'bg-primary-dark text-white min-h-32 w-full flex flex-col items-start justify-end p-4 rounded-2xl relative',
        className
      )}
      {...props}
    >
      <Typography variant="heading" className="first-letter:capitalize"> 
        {shopName}{' '}
        {shopAddress && (
          <span className="font-normal text-base">- {shopAddress}</span>
        )}
      </Typography>
      <Typography variant="body">
        Åben fra {opensAt} til {closesAt}
      </Typography>
      {showBackButten && (
        <Link to="/shops" className="absolute top-4 left-4">
          <ArrowLeftIcon />
        </Link>
      )}
      {showFavoritButten && (
        <button className="absolute top-4 right-4" onClick={() => toggleFavorite(shopAddress!)}>
          <StoreFavorit onToggle={() => toggleFavorite(shopAddress!)} isFavorite={() => isFavorite(shopAddress!)} />
        </button>
      )}
    </div>
  );
}

export default ShopCard;