'use client';

import { useEffect, useState } from 'react';
import { RatingProps } from './Rating.Props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	const constructRating = (CurrentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon
					className={cn(styles.Star, {
						[styles.filled]: i < CurrentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onClick={() => HandleClick(i + 1)}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const HandleClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props} onMouseLeave={() => changeDisplay(rating)}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	);
};