import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function StarRating({ rating = 0, totalStars = 5 }) {
  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={`text-l ${
              starValue <= Math.round(rating)
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        );
      })}
    </div>
  );
}
