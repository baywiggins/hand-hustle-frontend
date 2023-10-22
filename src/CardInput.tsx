import React, { useState, useEffect, useCallback } from "react";
import BlankCard from "./BlankCard";

const CardInput: React.FC = () => {
  const [firstCard, setFirstCard] = useState({ rank: "", suit: "" });
  const [secondCard, setSecondCard] = useState({ rank: "", suit: "" });
  const [currentCard, setCurrentCard] = useState("first");
  const [cardsLocked, setCardsLocked] = useState(false);

  const suitMapping = {
    H: "hearts",
    C: "clubs",
    S: "spades",
    D: "diamonds",
  };

  const sendCardsToBackend = useCallback(async () => {
    const cardData = [firstCard, secondCard];
    try {
      console.log(JSON.stringify(cardData));
      const response = await fetch("api/game/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
      });

      const responseData = await response.json();

      console.log(responseData);
    } catch (error) {
      console.error("Failed to send card data:", error);
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace" || event.key === "Delete") {
        setFirstCard({ rank: "", suit: "" });
        setSecondCard({ rank: "", suit: "" });
        setCurrentCard("first");
        setCardsLocked(false);
        return;
      }

      if (event.key === "Enter" && cardsLocked) {
        sendCardsToBackend();
        return;
      }

      if (cardsLocked) return;

      const key = event.key.toUpperCase();

      if (
        [
          "A",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ].includes(key)
      ) {
        if (currentCard === "first") {
          setFirstCard((prev) => ({ ...prev, rank: key }));
        } else {
          setSecondCard((prev) => ({ ...prev, rank: key }));
        }
      } else if (["H", "C", "S", "D"].includes(key)) {
        if (currentCard === "first") {
          setFirstCard((prev) => ({
            ...prev,
            suit: suitMapping[key as keyof typeof suitMapping],
          }));
          setCurrentCard("second");
        } else {
          setSecondCard((prev) => ({
            ...prev,
            suit: suitMapping[key as keyof typeof suitMapping],
          }));
          setCurrentCard("first");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentCard, cardsLocked, sendCardsToBackend, suitMapping]);

  useEffect(() => {
    if (
      firstCard.rank &&
      firstCard.suit &&
      secondCard.rank &&
      secondCard.suit
    ) {
      setCardsLocked(true);
    }
  }, [firstCard, secondCard]);

  return (
    <div className="remaining h-full w-full mt-2 font-card flex justify-center z-100 bottom-2">
      <BlankCard suit={firstCard.suit} rank={firstCard.rank} />
      <BlankCard suit={secondCard.suit} rank={secondCard.rank} />
    </div>
  );
};

export default CardInput;
