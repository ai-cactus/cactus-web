import React, { useState } from 'react';
import { ChevronDown, Mail, ArrowLeft, ArrowRight, X, Check } from 'lucide-react';
import { InputField } from '@/components/fields';
import { FilledButton, OutlinedButton } from '@/components/buttons';
import { useOnboarding } from './context';
import ProgressBar from '@/components/onboarding/ProgressBar';

interface TeamSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  description?: string;
  planFeatures?: string[];
}

const TeamSubscriptionModal: React.FC<TeamSubscriptionModalProps> = ({ 
  isOpen, 
  onClose, 
  onNext,
  title = "Subscribe to a Plan",
  subtitle = "to Add Team Members",
  ctaText = "Next",
  description = "To start building your team and fully experience Theraptly, you'll need to subscribe to a plan. (All plans come with a 14-day free trial so you can explore the platform risk-free)",
  planFeatures = [
    "Upload and manage policy documents.",
    "Analyze documents against compliance standards.",
    "Identify non-compliant sections with explanations.",
    "Get tailored recommendations for compliance.", 
    "Edit policies directly with a text editor.",
    "Track changes with version history.",
    "Access AI assistance for quick insights."
  ]
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div 
          className="h-80 bg-cover bg-center bg-no-repeat rounded-t-2xl"
          style={{ backgroundImage: 'url(/images/build.png)' }}
          aria-hidden="true"
        />

        <div className="p-8 pb-12">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="mb-2">
                <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
                <p className="text-3xl font-bold text-indigo-600">{subtitle}</p>
              </div>
              <span className="absolute top-2 -right-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                PRO ⚡
              </span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
              {description}
            </p>
          </div>

          <div className="space-y-4 mb-8 max-w-md mx-auto px-4">
            {planFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 text-indigo-600" />
                </div>
                <span className="text-gray-600 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

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

export function Step3Address() {
  const { formData, updateFormData, nextStep, prevStep } = useOnboarding();
  const [teamMembers, setTeamMembers] = useState([
    { email: '', position: '', permission: '' },
    { email: '', position: '', permission: '' },
    { email: '', position: '', permission: '' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasAnyMemberData = teamMembers.some(member => 
    member.email.trim() !== '' || member.position !== '' || member.permission !== ''
  );

  const updateTeamMember = (index: number, field: string, value: string) => {
    const updated = [...teamMembers];
    updated[index] = { ...updated[index], [field]: value };
    setTeamMembers(updated);
    
    // Update the form data in context
    updateFormData({
      ...formData,
      teamMembers: updated.filter(m => m.email.trim() !== '')
    });
  };

  const handleNextClick = () => {
    // Show the subscription modal when Next is clicked
    setIsModalOpen(true);
  };

  const handleModalNext = () => {
    // Close the modal and proceed to the next step
    setIsModalOpen(false);
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  const positions = [
    'Select role',
    'CEO',
    'CTO',
    'CFO',
    'Manager',
    'Developer',
    'Designer',
    'Analyst',
    'Coordinator'
  ];

  const permissions = [
    'Permission',
    'Admin',
    'Editor',
    'Viewer',
    'Contributor'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Build your <span className="text-blue-600">Team</span>
        </h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          Invite your team members to your organization to collaborate on your compliance work
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar currentStep={3} totalSteps={5} />
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6 mb-8">
        {/* Headers */}
        <div className="grid grid-cols-3 gap-6 mb-4 px-4">
          <div className="text-sm font-medium text-gray-900">Email</div>
          <div className="text-sm font-medium text-gray-900">Position</div>
          <div className="text-sm font-medium text-gray-900">Permission</div>
        </div>

        {/* Team Member Rows */}
        {teamMembers.map((member, index) => (
          <div key={index} className="grid grid-cols-3 gap-6">
            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter team member's email"
                value={member.email}
                onChange={(e) => updateTeamMember(index, 'email', e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Position Dropdown */}
            <div className="relative">
              <select
                value={member.position}
                onChange={(e) => updateTeamMember(index, 'position', e.target.value)}
                className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900"
              >
                {positions.map((position) => (
                  <option key={position} value={position} disabled={position === 'Select role'}>
                    {position}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Permission Dropdown */}
            <div className="relative">
              <select
                value={member.permission}
                onChange={(e) => updateTeamMember(index, 'permission', e.target.value)}
                className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900"
              >
                {permissions.map((permission) => (
                  <option key={permission} value={permission} disabled={permission === 'Permission'}>
                    {permission}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-12">
        <OutlinedButton
          onClick={handleBack}
          className="px-8 py-2.5 rounded-full flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </OutlinedButton>

        <div className="flex items-center space-x-4">
          <button 
            className="text-blue-600 hover:text-blue-700 font-medium"
            onClick={handleNextClick}
          >
            Add team members later
          </button>
          
          <FilledButton
            onClick={handleNextClick}
            className="px-8 py-2.5 rounded-full flex items-center"
            disabled={!hasAnyMemberData}
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </FilledButton>

          {/* Subscription Modal */}
          <TeamSubscriptionModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onNext={handleModalNext}
          />
        </div>
      </div>
    </div>
  );
}

export default Step3Address;