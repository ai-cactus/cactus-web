'use client';
import React, { useState, useEffect } from 'react';
import { useOnboarding } from './context';
import { ChevronDown, Mail, ArrowLeft, ArrowRight, X, Check, Briefcase, Shield } from 'lucide-react';

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
      <div className="bg-white rounded-2xl px-6 py-4 w-full max-w-[470px] max-h-[90vh] flex flex-col overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full pt-[35%] bg-indigo-50">
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: 'url(/images/build.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: '0 auto',
              maxWidth: '100%',
              height: '100%',
              borderRadius: '1rem'
            }}
            aria-hidden="true"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-1.5 text-gray-500 hover:text-gray-700 transition-colors z-10 shadow-sm"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Section - Scrollable without visible scrollbar */}
        <div className="flex-1 overflow-y-auto px-6 py-5 scrollbar-hide">
          <div className="text-center mb-4">
            <div className="relative inline-block mb-3">
              <h3 className="text-xl font-bold text-gray-900 leading-tight">{title}</h3>
              <p className="text-xl font-bold text-indigo-600 leading-tight">{subtitle}</p>
              <span className="absolute -top-2 -right-14 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2 py-1 rounded-full text-[11px] font-bold flex items-center gap-1">
                PRO ⚡
              </span>
            </div>
            <p className="text-gray-600 text-[13px] leading-snug px-2">
              {description}
            </p>
          </div>

          <div className="space-y-2.5 mb-5">
            {planFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <div className="w-4 h-4 bg-indigo-100 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Check className="w-2.5 h-2.5 text-indigo-600" />
                </div>
                <span className="text-gray-600 text-[13px] leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="border-t border-gray-100 p-4 bg-white">
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-xl font-semibold text-[15px] hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export function Step3Address() {
  const { nextStep, prevStep } = useOnboarding();
  const [teamMembers, setTeamMembers] = useState([
    { email: '', position: '', permission: '' },
    { email: '', position: '', permission: '' },
    { email: '', position: '', permission: '' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const hasAnyMemberData = teamMembers.some(member => 
    member.email.trim() !== '' && 
    member.position.trim() !== '' && 
    member.permission.trim() !== ''
  );

  const updateTeamMember = (index: number, field: string, value: string) => {
    const updated = [...teamMembers];
    updated[index] = { ...updated[index], [field]: value };
    setTeamMembers(updated);
  };

  const handleModalNext = () => {
    setIsModalOpen(false);
    // Proceed to next step after modal is closed
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  const positions = [
    '', // Empty string for placeholder
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
    '', // Empty string for placeholder
    'Admin',
    'Editor',
    'Viewer',
    'Contributor'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mb-6 -ml-36 px-6 flex items-center"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Build your <span className="text-blue-600">Team</span>
        </h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          Invite your team members to your organization to collaborate on your compliance work
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6 mb-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="grid grid-cols-3 gap-8">
            {index === 0 && (
              <>
                <div className="text-sm font-medium text-gray-900 text-xl -mb-6">Email</div>
                <div className="text-sm font-medium text-gray-900 text-xl -mb-6">Position</div>
                <div className="text-sm font-medium text-gray-900 text-xl -mb-6">Permission</div>
              </>
            )}
            
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

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Briefcase className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={member.position}
                onChange={(e) => updateTeamMember(index, 'position', e.target.value)}
                className={`w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 ${
                  member.position ? 'bg-blue-50' : 'bg-white'
                } text-gray-900`}
                required
              >
                <option value="" disabled>Select role</option>
                {positions.filter(p => p !== '').map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {/* <ChevronDown className="h-4 w-4 text-gray-400" /> */}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Shield className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={member.permission}
                onChange={(e) => updateTeamMember(index, 'permission', e.target.value)}
                className={`w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 ${
                  member.permission ? 'bg-blue-50' : 'bg-white'
                } text-gray-900`}
                required
              >
                <option value="" disabled>Select permission</option>
                {permissions.filter(p => p !== '').map((permission) => (
                  <option key={permission} value={permission}>
                    {permission}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                {/* <ChevronDown className="h-4 w-4 text-gray-400" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center mt-12">
        <div className="flex justify-center w-full space-x-4">
          <button 
            className="text-blue-600 hover:text-blue-700 font-medium"
            onClick={() => nextStep()}
          >
            Add team members later
          </button>
          
          <button
            onClick={() => setIsModalOpen(true)}
            disabled={!hasAnyMemberData}
            className={`px-8 py-2.5 rounded-full font-medium transition-colors flex items-center ${
              hasAnyMemberData 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Subscription Modal */}
      <TeamSubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNext={handleModalNext}
      />
    </div>
  );
}

export default Step3Address;