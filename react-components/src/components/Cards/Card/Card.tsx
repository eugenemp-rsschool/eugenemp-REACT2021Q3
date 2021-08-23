import React, { FC } from 'react';
import './Card.scss';

type CardProps = {
  imageSrc: string;
  heading: string;
  info: string;
  author: string;
};

export const Card: FC<CardProps> = ({
  imageSrc,
  heading,
  info,
  author,
}): JSX.Element => (
  <div className="card__wrapper">
    <div className="card">
      <div
        className="card__image"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      />
      <div className="card__text">
        <h3 className="card__text__heading">{heading}</h3>
        <p className="card__text__info">{info}</p>
        <p className="card__text__author">{author}</p>
      </div>
      <div className="card__btn__wrapper">
        <div className="card__btn__like" title="Like" />
        <div className="card__btn__repost" title="Share" />
        <div className="card__btn__bookmark" title="Save to bookmarks" />
      </div>
    </div>
  </div>
);
