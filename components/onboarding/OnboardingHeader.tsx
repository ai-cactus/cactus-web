import React from 'react';
import Image from 'next/image';

interface OnboardingHeaderProps {
  className?: string;
  logoClassName?: string;
  showBorder?: boolean;
}

export const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
  className = '-mt-6',
  logoClassName = 'w-[30px] h-[30px]',
  showBorder = true,
}) => {
  return (
    <div className={`w-full mb-8 md:mb-12 ${className}`}>
      <div className="w-full border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="py-6 flex justify-center">
            <Image 
              src="/logo-black.png" 
              alt="Therapily Logo"
              width={50}
              height={50}
              className={logoClassName}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingHeader;
