import React from "react";
import diamond from "./assets/suits/diamond.png";
import spade from "./assets/suits/spade.png";
import club from "./assets/suits/club.png";
import heart from "./assets/suits/heart.png";
import base_card from "./assets/suits/base-card.png";

interface BoardCardProps {
  suit: string;
  rank: string;
}

const suitImages: Record<string, string> = {
  diamonds: diamond,
  spades: spade,
  clubs: club,
  hearts: heart,
};

const BoardCard: React.FC<BoardCardProps> = ({ suit, rank }) => {
  return (
    <div className="relative h-90">
      <img src={base_card} alt="card base" className="card-base object-cover" />
      <img
        src={suitImages[suit.toLowerCase()]}
        alt={suit}
        className="card-suit h-50 absolute bottom-5 right-5"
      />
      <span className="card-rank text-5xl absolute top-3 left-3">{rank}</span>
    </div>
  );
};

export default BoardCard;
