import { createContext } from "react";
import { ComplianceDocumentType, DocumentResponse } from "./types";

export const ComplianceDocumentContext = createContext<ComplianceDocumentType | null>(null);

export const UploadedDocumentContext = createContext<{documents: DocumentResponse[], setDocuments: Function}>({documents: [], setDocuments: () => {}});