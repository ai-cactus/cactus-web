export type StatusType = "success" | "error" | "loading" | "idle";

export type Section = {
  section_title: string;
  section_content: string;
};

export type ComplianceDocumentType = {
  _id: string;
  userPolicyId: string;
  compliance_score: number;
  major_compliance_issues: Section[];
  required_changes_to_achieve_compliance: Section[];
  missing_critical_components: Section[];
  recommendations_for_improvement: Section[];
  metadata: {
    practice: string;
    jurisdiction: string;
    analysisDate: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Profile = {
  practice?: string;
  jurisdiction?: string;
  role?: string;
  createdAt?: string;
};

export type DocumentResponse = {
  createdAt: string;
  fileName: string;
  fileSize: number;
  fileUrl: string;
  jurisdiction: string;
  metadata: { uploadedAt: string };
  mimeType: string;
  practice: string;
  storagePath: string;
  totalPages: number;
  updatedAt: string;
  userId: string;
  __v: number;
  _id: string;
};

export interface SectionType {
  _id: string;
  id: string;
  documentId: string;
  index: number;
  parent: any;
  heading: string;
  content: string;
  metadata: {
    level: number;
    pageNumber: any;
    hasTables: boolean;
    hasLists: boolean;
    hasImages: boolean;
  };
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface SingleDocument {
  _id: string;
  userId: string;
  fileName: string;
  fileUrl: string;
  storagePath: string;
  mimeType: string;
  fileSize: number;
  practice: string;
  jurisdiction: string;
  metadata: {
    uploadedAt: string;
    contentType: string;
    numberOfPages: any;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  sections: SectionType[];
}
