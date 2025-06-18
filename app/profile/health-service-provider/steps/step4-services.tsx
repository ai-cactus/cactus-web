import { useState } from 'react';
import { Check } from 'lucide-react';
import { useOnboarding } from './context';
import ProgressBar from '@/components/onboarding/ProgressBar';

interface Plan {
  id: string;
  name: string;
  price: string;
  priceSuffix: string;
  features: string[];
  isPopular?: boolean;
  buttonVariant: 'outline' | 'solid';
}

export default function Step4Services() {
  const { nextStep, prevStep } = useOnboarding();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: 'pro',
      name: 'Pro Plan',
      price: '$19.99',
      priceSuffix: '/month',
      features: [
        'All analytics features',
        'Up to 250,000 tracked visits',
        'Normal support',
        'Up to 3 team members'
      ],
      buttonVariant: 'outline'
    },
    {
      id: 'business',
      name: 'Business Plan',
      price: '$39.99',
      priceSuffix: '/month',
      features: [
        'All analytics features',
        'Up to 1,000,000 tracked visits',
        'Priority support',
        'Up to 10 team members'
      ],
      isPopular: true,
      buttonVariant: 'solid'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: 'Custom',
      priceSuffix: '',
      features: [
        'All analytics features',
        'Unlimited tracked visits',
        '24/7 dedicated support',
        'Unlimited team members',
        'Custom integrations'
      ],
      buttonVariant: 'outline'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    // You can add additional logic here, like calling an API or updating parent state
    console.log('Selected plan:', planId);
  };

  const handleNext = () => {
    if (selectedPlan) {
      nextStep();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex justify-center mb-12">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded-sm relative">
            <div className="absolute inset-1 bg-white rounded-xs opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Select a <span className="text-blue-600">Plan</span> to Proceed
        </h1>
        <p className="text-gray-600 text-lg">
          Select a plan to unlock team collaboration and compliance tools.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="mb-12">
        <ProgressBar currentStep={4} totalSteps={4} />
      </div>

      {/* Most Popular Badge - only show if no plan is selected */}
      {!selectedPlan && (
        <div className="flex justify-center relative mb-8">
          <div className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full">
            Most Popular
          </div>
        </div>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`relative rounded-2xl p-8 ${
              plan.isPopular 
                ? 'bg-blue-600 shadow-xl transform scale-105' 
                : 'bg-white border border-gray-200'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <h3 className={`text-xl font-semibold mb-2 ${
                plan.isPopular ? 'text-white' : 'text-gray-900'
              }`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline">
                <span className={`text-4xl font-bold ${
                  plan.isPopular ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.price}
                </span>
                {plan.priceSuffix && (
                  <span className={`ml-2 ${
                    plan.isPopular ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {plan.priceSuffix}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-8">
              <h4 className={`font-semibold mb-4 ${
                plan.isPopular ? 'text-white' : 'text-gray-900'
              }`}>
                What's included
              </h4>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check 
                      size={20} 
                      className={`flex-shrink-0 mt-0.5 mr-3 ${
                        plan.isPopular ? 'text-white' : 'text-blue-600'
                      }`} 
                    />
                    <span className={plan.isPopular ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handlePlanSelect(plan.id)}
              className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                plan.buttonVariant === 'solid'
                  ? 'bg-white text-blue-600 hover:bg-gray-50'
                  : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-12">
        <button
          onClick={prevStep}
          className="px-6 py-2.5 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        
        <button
          onClick={handleNext}
          disabled={!selectedPlan}
          className={`px-8 py-2.5 rounded-full font-medium text-white ${
            selectedPlan
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-300 cursor-not-allowed'
          } transition-colors flex items-center`}
        >
          Next
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
