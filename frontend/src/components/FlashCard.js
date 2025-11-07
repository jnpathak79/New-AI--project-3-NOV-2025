import React, { useState } from 'react';
import { Card } from './ui/card';
import { RotateCw } from 'lucide-react';

const FlashCard = ({ question, answer, difficulty, isReviewed, onToggleReview }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && !isReviewed) {
      onToggleReview();
    }
  };

  const getDifficultyColor = (level) => {
    switch(level) {
      case 'basic': return 'bg-blue-100 text-blue-700';
      case 'intermediate': return 'bg-amber-100 text-amber-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="perspective-1000">
      <Card 
        className="relative h-80 cursor-pointer transition-all duration-500 transform hover:shadow-xl"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        onClick={handleFlip}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 p-6 flex flex-col justify-between backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor(difficulty)}`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
              <RotateCw className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-center h-48">
              <p className="text-lg font-medium text-gray-800 text-center">
                {question}
              </p>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500">
            Click to reveal answer
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-br from-blue-50 to-indigo-50"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getDifficultyColor(difficulty)}`}>
                Answer
              </span>
              <RotateCw className="w-5 h-5 text-gray-600" />
            </div>
            <div className="overflow-y-auto h-48">
              <p className="text-sm text-gray-700 leading-relaxed">
                {answer}
              </p>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600">
            Click to see question
          </div>
        </div>

        {isReviewed && (
          <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full" 
               style={{ zIndex: 10 }}
               title="Reviewed"
          />
        )}
      </Card>
    </div>
  );
};

export default FlashCard;
