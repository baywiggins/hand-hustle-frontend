import React, { useState, useEffect } from "react";
import diamond from "./assets/suits/diamond.png";
import spade from "./assets/suits/spade.png";
import club from "./assets/suits/club.png";
import heart from "./assets/suits/heart.png";
import base_card from "./assets/suits/base-card.png";

interface BlankCardProps {
  suit?: string;
  rank?: string;
}

const suitImages: Record<string, string> = {
  diamonds: diamond,
  spades: spade,
  clubs: club,
  hearts: heart,
};

const BlankCard: React.FC<BlankCardProps> = ({ suit, rank }) => {
  const [showSuit, setShowSuit] = useState(false);
  const [showRank, setShowRank] = useState(false);

  useEffect(() => {
    if (suit) {
      setShowSuit(true);
    }
  }, [suit]);

  useEffect(() => {
    if (rank) {
      setShowRank(true);
    }
  }, [rank]);

  return (
    <div className="relative h-full">
      <img
        src={base_card}
        alt="card base"
        className="card-base relative h-95 object-cover"
      />
      {showSuit && (
        <img
          src={suitImages[suit!]}
          alt={suit}
          className={`card-suit h-40 absolute bottom-16 right-6 animate-fadeIn`}
        />
      )}
      {showRank && (
        <span
          className={`card-rank text-5xl absolute top-3 left-3 animate-fadeIn`}
        >
          {rank}
        </span>
      )}
    </div>
  );
};

export default BlankCard;
