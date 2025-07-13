import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = 'md', showNumber = false }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const isFilled = index < Math.floor(rating);
      const isHalfFilled = index === Math.floor(rating) && rating % 1 !== 0;
      
      return (
        <div key={index} className="relative">
          <Star 
            className={`${sizes[size]} text-gray-300`}
          />
          {(isFilled || isHalfFilled) && (
            <Star 
              className={`${sizes[size]} text-yellow-400 fill-yellow-400 absolute inset-0`}
              style={isHalfFilled ? { clipPath: `inset(0 ${100 - (rating % 1) * 100}% 0 0)` } : {}}
            />
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {renderStars()}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-gray-600 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default StarRating;