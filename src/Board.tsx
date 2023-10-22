import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardCard from "./BoardCard";

interface CardData {
  suit: string;
  rank: string;
}

const Board: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/game/start");
        setCards(response.data);
      } catch (error) {
        console.error("An error occurred while fetching the data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex space-x-3 justify-center m-5">
      {cards.map((card, index) => (
        <BoardCard key={index} suit={card.suit} rank={card.rank} />
      ))}
    </div>
  );
};

export default Board;
