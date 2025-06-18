import React from 'react';
import { X, Check } from 'lucide-react';

interface TeamSubscriptionModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onNext?: () => void;
  planFeatures?: string[];
  title?: string;
  subtitle?: string;
  ctaText?: string;
  badgeText?: string;
  imageUrl?: string;
  description?: string;
}

export const TeamSubscriptionModal: React.FC<TeamSubscriptionModalProps> = ({
  isOpen = true,
  onClose = () => {},
  onNext = () => {},
  planFeatures = [
    "Upload and manage policy documents.",
    "Analyze documents against compliance standards.",
    "Identify non-compliant sections with explanations.",
    "Get tailored recommendations for compliance.",
    "Edit policies directly with a text editor.",
    "Track changes with version history.",
    "Access AI assistance for quick insights."
  ],
  title = "Subscribe to a Plan",
  subtitle = "to Add Team Members",
  ctaText = "Next",
  badgeText = "PRO ⚡",
  imageUrl = "/images/build.png",
  description = "To start building your team and fully experience Theraptly, you'll need to subscribe to a plan. (All plans come with a 14-day free trial so you can explore the platform risk-free)"
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Team Preview Image Section */}
        <div 
          className="h-80 bg-cover bg-center bg-no-repeat rounded-t-2xl"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />

        {/* Main Content - Subscription Section */}
        <div className="p-8 pb-12">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="mb-2">
                <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
                {subtitle && (
                  <p className="text-3xl font-bold text-indigo-600">{subtitle}</p>
                )}
              </div>
              {badgeText && (
                <span className="absolute top-2 -right-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  {badgeText}
                </span>
              )}
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
              {description}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4 mb-8 max-w-md mx-auto px-4">
            {planFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="text-center pt-4">
            <button
              onClick={onNext}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSubscriptionModal;
