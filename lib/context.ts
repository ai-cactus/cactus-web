import { createContext } from "react";
import { ComplianceDocumentType } from "./types";

export const ComplianceDocumentContext = createContext<ComplianceDocumentType | null>(null);