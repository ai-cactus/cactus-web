import React, { useState } from 'react';
import { ChevronDown, ArrowLeft, Check } from 'lucide-react';
import { useOnboarding } from './context';

const Step1BasicInfo: React.FC = () => {
  const { nextStep, prevStep } = useOnboarding();
  const [completedSteps, setCompletedSteps] = useState({
    organization: false,
    team: false,
    plan: false
  });

  const handleStepClick = (step: string) => {
    if (step === 'organization') {
      // Mark organization step as completed and move to next step
      setCompletedSteps(prev => ({
        ...prev,
        [step]: true
      }));
      nextStep();
    } else {
      // For other steps, just mark as completed
      setCompletedSteps(prev => ({
        ...prev,
        [step]: !prev[step as keyof typeof prev]
      }));
    }
  };

  const handleBack = () => {
    prevStep();
  };

  // Check if all sections are completed
  const allSectionsCompleted = Object.values(completedSteps).every(Boolean);

  const handleSubmit = () => {
    if (allSectionsCompleted) {
      nextStep();
    }
  };

  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col items-center px-4">
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Let's Set Up Your <span className="text-blue-600">Profile!</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Welcome to Therapily! Take your time to check the information provided
        </p>
      </div>

      {/* Steps */}
      <div className="w-full max-w-4xl space-y-6 mb-12">
        {/* Organization Information */}
        <div 
          className="w-full bg-white rounded-lg border border-gray-200 p-8 cursor-pointer hover:border-gray-300 transition-colors"
          onClick={() => handleStepClick('organization')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                completedSteps.organization 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-gray-300'
              }`}>
                {completedSteps.organization && <Check className="w-4 h-4 text-white" />}
              </div>
              <span className="text-lg font-medium text-gray-900">
                Organization Information
              </span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Build your Team */}
        <div 
          className="w-full bg-white rounded-lg border border-gray-200 p-8 cursor-pointer hover:border-gray-300 transition-colors"
          onClick={() => handleStepClick('team')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                completedSteps.team 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-gray-300'
              }`}>
                {completedSteps.team && <Check className="w-4 h-4 text-white" />}
              </div>
              <span className="text-lg font-medium text-gray-900">
                Build your Team
              </span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Selected Plan */}
        <div 
          className="w-full bg-white rounded-lg border border-gray-200 p-8 cursor-pointer hover:border-gray-300 transition-colors"
          onClick={() => handleStepClick('plan')}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                completedSteps.plan 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-gray-300'
              }`}>
                {completedSteps.plan && <Check className="w-4 h-4 text-white" />}
              </div>
              <span className="text-lg font-medium text-gray-900">
                Selected Plan
              </span>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-4xl flex items-center justify-between">
        <button 
          onClick={handleBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back</span>
        </button>

        <button 
          onClick={handleSubmit}
          disabled={!allSectionsCompleted}
          className={`font-medium px-8 py-3 rounded-xl transition-colors flex items-center space-x-2 ${
            allSectionsCompleted 
              ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span>Submit & Start Free Trial</span>
          <Check className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Step1BasicInfo;
