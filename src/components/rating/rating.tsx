import { useEffect, useState } from 'react';
import { Icon } from '../icon/icon';
import { nanoid } from 'nanoid';
import sprite from '../../assets/sprite.svg';

export function Rating(props: {
  rating: number
}) {
  const rating = Math.ceil(props.rating);
  const maxRating = 5;
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(rating).fill(<Icon name={`${sprite}#full-star`} color="#C90606" width="14" height="12" />));

  const updateRating = (currentRating: number) => {
    if (currentRating < maxRating) {
      setRatingArray((oldArray) => [...oldArray, ...(new Array(Math.ceil(maxRating - currentRating)).fill(<Icon name={`${sprite}#empty-star`} color="none" width="14" height="12" />))]);
    }
  };

  useEffect(() => {
    updateRating(rating);
  }, [rating]);

  return (
    <div>
      {ratingArray.map((item) => <span key={nanoid()}>{item}</span>)}
    </div>
  );
}
