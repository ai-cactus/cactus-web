import React from 'react';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  currentStep, 
  totalSteps,
  className = '' 
}) => {
  // Calculate width for each segment
  const segmentWidth = 100 / totalSteps;
  const activeSegment = Math.min(currentStep, totalSteps);
  
  // Create array of segments
  const segments = Array.from({ length: totalSteps }, (_, i) => ({
    isActive: i < activeSegment,
    isCurrent: i === currentStep - 1,
    width: segmentWidth
  }));

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center gap-3 mb-1">
        <span className="text-sm font-medium text-gray-900">
          {currentStep}/{totalSteps}
        </span>
        <div className="flex-1">
          <div className="flex w-full gap-0.5">
            {segments.map((segment, index) => (
              <div 
                key={index}
                className={`h-2 rounded-md transition-all duration-300 ${
                  segment.isActive 
                    ? 'bg-blue-600' 
                    : 'bg-blue-200'
                }`}
            style={{ width: `calc(${segment.width}% - 1rem)` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
