import React from 'react';
import { FileText, Users, CreditCard, Shield } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start space-y-3 p-4 bg-blue-500/10 rounded-xl backdrop-blur-sm">
    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="text-blue-100 text-sm leading-relaxed">{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: "Policy Analyzer",
      description: "Instantly detect non-compliant content in your policy documents with AI-powered analysis."
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: "Document Versioning",
      description: "Track updates, revisions, and maintain accurate records across all uploads."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "Team Collaboration",
      description: "Add compliance and finance team members with role-based access and centralized communication."
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600" />,
      title: "Compliance Scoring",
      description: "Receive a percentage-based score for easy evaluation and quick decision-making."
    },
    {
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      title: "Billing & Plan Management",
      description: "Simple subscription options, with a free 14-day trial to get started risk-free."
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      title: "Secure Cloud Storage",
      description: "Keep all your sensitive compliance documents safe and accessible anytime, anywhere."
    }
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Start your 14 days free trial
        </h1>
        <p className="text-xl text-blue-100 leading-relaxed">
          Powerful tools to simplify, streamline and strengthen your CARF compliance processes, all in one place.
        </p>
      </div>
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
