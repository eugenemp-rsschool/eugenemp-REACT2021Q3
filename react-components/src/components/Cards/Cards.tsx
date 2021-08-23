import React, { FC } from 'react';
import { Card } from './Card/Card';
import './Cards.scss';

export const Cards: FC = (): JSX.Element => (
  <div className="cards-container">
    <Card
      imageSrc="/assets/images/car1.jpg"
      heading="Car"
      info="Exotic car"
      author="John Doe"
    />
    <Card
      imageSrc="/assets/images/car2.jpg"
      heading="Car"
      info="Exotic car"
      author="John Doe"
    />
    <Card
      imageSrc="/assets/images/car3.jpg"
      heading="Car"
      info="Exotic car"
      author="John Doe"
    />
    <Card
      imageSrc="/assets/images/car4.jpg"
      heading="Car"
      info="Exotic car"
      author="John Doe"
    />
    <Card
      imageSrc="/assets/images/car5.jpg"
      heading="Car"
      info="Exotic car"
      author="John Doe"
    />
    <Card
      imageSrc="/assets/images/car6.jpg"
      heading="Car"
      info="Exotic car"
      author="John Doe"
    />
  </div>
);
