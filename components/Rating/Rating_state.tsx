'use client';

import { useState } from 'react';
import { Rating } from './Rating';

export const Rating_state = (): JSX.Element => {

	const [rating, setRating] = useState<number>(3);
	return (
		<Rating rating={rating} isEditable setRating={setRating}></Rating>
	);
};