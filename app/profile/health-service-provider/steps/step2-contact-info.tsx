import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Upload as UploadIcon, Check, ArrowRight } from 'lucide-react';
import ProgressBar from '@/components/onboarding/ProgressBar';
import { InputField } from '../../../../components/fields';
import { FilledButton } from '../../../../components/buttons';
import { useOnboarding } from './context';
interface CollapsibleSectionProps {
  title: string;
  sectionKey: string;
  children: React.ReactNode;
  number: string;
  isCompleted?: boolean;
  expandedSections: Record<string, boolean>;
  toggleSection: (key: string) => void;
  isSectionCompleted: (key: string) => boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  sectionKey,
  children,
  number,
  expandedSections,
  toggleSection,
  isSectionCompleted
}) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
    <button
      onClick={() => toggleSection(sectionKey)}
      className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between text-left"
    >
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-full mr-2 ml-1 flex-shrink-0 flex items-center justify-center ${isSectionCompleted(sectionKey)
            ? 'bg-green-500'
            : 'bg-gray-200 border-2 border-gray-300'
          }`}>
          {isSectionCompleted(sectionKey) && (
            <Check className="w-3 h-3 text-white stroke-[3]" />
          )}
        </div>
        <span className="font-medium text-gray-900">
          {number}. {title}
        </span>
      </div>
      {expandedSections[sectionKey] ? (
        <ChevronUp className="w-5 h-5 text-gray-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </button>
    {expandedSections[sectionKey] && (
      <div className="px-6 pb-6 bg-white border-t border-gray-100">
        {children}
      </div>
    )}
  </div>
);

// Email validation function
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const Step2ContactInfo: React.FC = () => {
  const { formData, updateFormData, nextStep, prevStep } = useOnboarding();
  const [isHipaaOpen, setIsHipaaOpen] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  
  // Track expanded/collapsed state of sections
  const [expandedSections, setExpandedSections] = useState({
    organization: true,
    compliance: true,
    contact: true
  });

  // Track completion status of each section
  const isSectionCompleted = (sectionKey: string) => {
    const requiredFields: Record<string, (keyof typeof formData)[]> = {
      organization: ['legalBusinessName', 'doingBusinessAs', 'businessType', 'primaryAddress', 'numberOfStaff'],
      compliance: ['stateLicenseNumber', 'hipaaCompliance'],
      contact: ['primaryContactName', 'primaryContactEmail']
    };
    
    const fields = requiredFields[sectionKey] || [];
    return fields.every(field => {
      const value = formData[field as keyof typeof formData];
      
      if (field === 'numberOfStaff') {
        return value !== undefined && value !== null && value !== '0';
      }
      
      if (field === 'hipaaCompliance') {
        return value === true || value === false;
      }
      
      if (value === undefined || value === null) return false;
      if (typeof value === 'string') return value.trim() !== '';
      if (typeof value === 'number') return !isNaN(value);
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === 'boolean') return true;
      if (typeof value === 'object') return Object.keys(value).length > 0;
      return Boolean(value);
    });
  };

  const showError = (field: string) => {
    if (!touchedFields[field]) return false;
    
    const value = formData[field as keyof typeof formData];
    
    if (field === 'numberOfStaff') {
      return value === '0' || !value;
    }
    
    if (field === 'hipaaCompliance') {
      return value === undefined || value === null || value === '';
    }

    if (field === 'primaryContactName') {
      return !value || (typeof value === 'string' && value.trim() === '');
    }

    if (field === 'primaryContactEmail') {
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        return 'Email is required';
      }
      if (typeof value === 'string' && !validateEmail(value)) {
        return 'Please enter a valid email address';
      }
      return false;
    }


    
    return false;
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleChange = (field: string, value: any) => {
    updateFormData({ [field]: value });
  };

  const handleBlur = (field: string) => {
    setTouchedFields(prev => ({
      ...prev,
      [field]: true
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-medium text-gray-900 mb-4">
              👋 Hey Awwal, welcome to <span className="text-blue-500 font-semibold">Theraptly</span>
            </h1>
            <p className="text-xl text-gray-700 mb-6">Enter your Organization's Information</p>
          </div>
          
          {/* Progress Bar - Shows this as step 1 of 3 */}
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-md">
              <ProgressBar 
                currentStep={1} 
                totalSteps={3} 
              />
            </div>
          </div>
        </div>

        {/* Form Sections */}
        <div className="space-y-4">
          {/* Organization Information */}
          <CollapsibleSection
            title="Basic Organization Information"
            sectionKey="organization"
            number="1"
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            isSectionCompleted={isSectionCompleted}
          >
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  labeltext="Legal Business Name"
                  name="legalBusinessName"
                  value={formData.legalBusinessName || ''}
                  onChange={(e) => handleChange('legalBusinessName', e.target.value)}
                  placeholder="Enter your official business name"
                />
                <InputField
                  labeltext="Doing Business As"
                  name="doingBusinessAs"
                  value={formData.doingBusinessAs || ''}
                  onChange={(e) => handleChange('doingBusinessAs', e.target.value)}
                  placeholder="Provide any alternative or trade name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  labeltext="Employer Identification Number (EIN)"
                  name="ein"
                  value={formData.ein || ''}
                  onChange={(e) => handleChange('ein', e.target.value)}
                  placeholder="Enter your EIN (if applicable)"
                />
                <InputField
                  labeltext="Business Type"
                  name="businessType"
                  value={formData.businessType || ''}
                  onChange={(e) => handleChange('businessType', e.target.value)}
                  placeholder="e.g., private practice, clinic"
                />
                <InputField
                  labeltext="Primary Business Address"
                  name="primaryAddress"
                  value={formData.primaryAddress || ''}
                  onChange={(e) => handleChange('primaryAddress', e.target.value)}
                  placeholder="Enter your main office location"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Staff:
                </label>
                <div className="relative">
                  <select
                    value={formData.numberOfStaff || '0'}
                    onChange={(e) => handleChange('numberOfStaff', e.target.value)}
                    onBlur={() => handleBlur('numberOfStaff')}
                    className={`w-full px-3 py-2 border ${
                      showError('numberOfStaff') ? 'border-red-500' : 'border-gray-300'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
                  >
                    <option value="0">0</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-25">11-25</option>
                    <option value="26-50">26-50</option>
                    <option value="50+">50+</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
                {showError('numberOfStaff') && (
                  <p className="mt-1 text-sm text-red-600">Number of staff must be greater than 0</p>
                )}
              </div>
            </div>
          </CollapsibleSection>

          {/* Compliance & Credentialing */}
          <CollapsibleSection
            title="Compliance & Credentialing"
            sectionKey="compliance"
            number="2"
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            isSectionCompleted={isSectionCompleted}
          >
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  labeltext="State Healthcare License Number"
                  name="stateLicenseNumber"
                  value={formData.stateLicenseNumber || ''}
                  onChange={(e) => handleChange('stateLicenseNumber', e.target.value)}
                  placeholder="Enter your state healthcare license number"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    HIPAA Compliance Confirmation
                  </label>
                  <div className="relative">
                    <select
                      value={formData.hipaaCompliance ?? ''}
                      onChange={(e) => handleChange('hipaaCompliance', e.target.value === 'true')}
                      onFocus={() => setIsHipaaOpen(true)}
                      onBlur={() => {
                        setIsHipaaOpen(false);
                        handleBlur('hipaaCompliance');
                      }}
                      className={`w-full px-3 py-2 border ${
                        showError('hipaaCompliance') ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white`}
                    >
                      <option value="">Select an option</option>
                      <option value="true">Yes, we are HIPAA compliant</option>
                      <option value="false">No, we are not HIPAA compliant</option>
                    </select>
                    <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none transition-transform duration-200 ${isHipaaOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {showError('hipaaCompliance') && (
                    <p className="mt-1 text-sm text-red-600">Please select a HIPAA compliance status</p>
                  )}
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Contact Information */}
          <CollapsibleSection
            title="Contact Information"
            sectionKey="contact"
            number="3"
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            isSectionCompleted={isSectionCompleted}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <div>
                  <InputField
                    labeltext="Primary Contact Name"
                    name="primaryContactName"
                    value={formData.primaryContactName || ''}
                    onChange={(e) => handleChange('primaryContactName', e.target.value)}
                    onBlur={() => handleBlur('primaryContactName')}
                    placeholder="Enter the full name of the main contact"
                    className={showError('primaryContactName') ? 'border-red-500' : ''}
                  />
                  {showError('primaryContactName') && (
                    <p className="mt-1 text-sm text-red-600">Contact name is required</p>
                  )}
                </div>
              </div>
              <div>
                <div>
                  <InputField
                    labeltext="Primary Contact Email"
                    name="primaryContactEmail"
                    type="email"
                    value={formData.primaryContactEmail || ''}
                    onChange={(e) => handleChange('primaryContactEmail', e.target.value)}
                    onBlur={() => handleBlur('primaryContactEmail')}
                    placeholder="Enter the email of the main contact"
                    className={showError('primaryContactEmail') ? 'border-red-500' : ''}
                  />
                  {showError('primaryContactEmail') && (
                    <p className="mt-1 text-sm text-red-600">{showError('primaryContactEmail')}</p>
                  )}
                </div>
              </div>

            </div>
          </CollapsibleSection>

          {/* Document Uploads */}
          <CollapsibleSection
            title="Document Uploads (Optional)"
            sectionKey="documents"
            number="4"
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            isSectionCompleted={() => true} // Always show as complete since it's optional
          >
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-4">
                Upload your certification (e.g., CARF, Joint Commission)
              </p>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <UploadIcon className="w-4 h-4 mr-2" />
                Upload file
              </button>
            </div>
          </CollapsibleSection>

          {/* Navigation Buttons */}
          <div className="mt-8 py-6 flex justify-center">
            <button
              type="button"
              onClick={nextStep}
              disabled={!isSectionCompleted('organization') || !isSectionCompleted('compliance') || !isSectionCompleted('contact')}
              className={`inline-flex items-center justify-center w-64 px-6 py-3 border border-transparent shadow-sm text-base font-medium text-white ${
                isSectionCompleted('organization') && isSectionCompleted('compliance') && isSectionCompleted('contact')
                  ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              style={{ borderRadius: '24px' }}
            >
              Next
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2ContactInfo;