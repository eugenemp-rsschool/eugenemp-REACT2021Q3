import React, { CSSProperties, FC, useEffect, useState } from 'react';
import './OutputCard.scss';

export type OutputCardProps = {
  id: string;
  fname: string;
  lname: string;
  bdate?: string;
  country: string;
  city: string;
  zip: string;
  onClick: CallableFunction;
};

export const OutputCard: FC<OutputCardProps> = ({
  id,
  fname,
  lname,
  bdate,
  country,
  city,
  zip,
  onClick,
}: OutputCardProps): JSX.Element => {
  const [style, setStyle] = useState<CSSProperties>({});

  // Visual fade-in effect
  useEffect(() => {
    setStyle({ opacity: 1 });
  }, []);

  return (
    <div id={id} className="output__card" style={style}>
      <button
        className="output__card__btn"
        type="button"
        title="Delete card"
        onClick={() => onClick(id)}
      >
        Delete
      </button>
      <div className="output__card__line">
        <span className="output__card__name">
          {fname && lname && `${fname} ${lname}`}
        </span>
      </div>
      <div className="output__card__line">
        <span className="output__bdate">{bdate}</span>
      </div>
      <div className="output__card__line">
        <span className="output__card__geo">
          {city && country && `${city}, ${country}`}
        </span>
      </div>
      <div className="output__card__line">
        <span className="output__card__zip">{zip}</span>
      </div>
    </div>
  );
};
