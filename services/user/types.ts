export interface DocumentType {
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
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalPages?: number;
}

export interface AnalyzeDocumentPayload {
  documentId: string;
  pageNumber: number;
  endPageNumber: number;
}
