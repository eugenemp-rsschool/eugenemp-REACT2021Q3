import React, { FC, useState } from 'react';
import { Form } from './components/Form/Form';
import {
  OutputCard,
  OutputCardProps,
} from './components/OutputCard/OutputCard';
import './App.scss';

type OutCardData = OutputCardProps & { id: string };

export const App: FC = (): JSX.Element => {
  const [outCardsData, setOutCardData] = useState<OutCardData[]>([]);

  // Delete card
  const deleteCard = (id: string) => {
    setOutCardData((prevCardsData) => {
      prevCardsData.splice(prevCardsData.findIndex((el) => el.id === id), 1);
      return [...prevCardsData];
    });
  };

  // Spawn new card on form submit
  const handleSubmit = (e: React.FormEvent, cardProps: OutputCardProps) => {
    e.preventDefault();

    const cardData: OutCardData = Object.assign(cardProps);
    cardData.id = new Date().getMilliseconds().toString();

    setOutCardData([...outCardsData, cardData]);
  };

  return (
    <div className="app">
      <div className="app__column-left">
        <Form onSubmit={handleSubmit} />
      </div>
      <div className="app__column-right">
        {outCardsData.map((card) => (
          <OutputCard key={card.id} {...card} onClick={deleteCard} />
        ))}
      </div>
    </div>
  );
};
