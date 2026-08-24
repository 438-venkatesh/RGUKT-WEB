import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';
import type { ProgramDocument } from '../data/academicDocuments';
import './DocumentCard.css';

interface DocumentCardProps {
  doc: ProgramDocument;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ doc }) => {
  return (
    <div className="doc-row-item">
      <div className="doc-row-left">
        <div className="doc-row-icon-box">
          <FileText size={20} />
        </div>
        <div className="doc-row-info">
          <div className="doc-row-top-line">
            <h4 className="doc-row-title">{doc.title}</h4>
            <span className="doc-row-badge">{doc.category}</span>
            {doc.academicYear && (
              <span className="doc-row-year">{doc.academicYear}</span>
            )}
          </div>
          <p className="doc-row-desc">{doc.description}</p>
          <div className="doc-row-meta">
            <span>Ref: {doc.officialDate || 'Official Council Gazette'}</span>
            <span>•</span>
            <span>PDF Document</span>
            {doc.size && (
              <>
                <span>•</span>
                <span>Size: {doc.size}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="doc-row-actions">
        <a
          href={doc.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="doc-row-btn-primary"
          title={`View ${doc.title}`}
        >
          <Eye size={14} />
          <span>View PDF</span>
        </a>
        <a
          href={doc.fileUrl}
          download
          className="doc-row-btn-secondary"
          title={`Download ${doc.title}`}
        >
          <Download size={14} />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};

export type DocFilterType =
  | 'ALL'
  | 'UG'
  | 'PG'
  | 'Research'
  | 'Regulations'
  | 'Calendar'
  | 'Curriculum'
  | 'Examinations'
  | 'ExamSchedules'
  | 'Summer'
  | 'General';

interface DocumentSectionProps {
  documents: ProgramDocument[];
  defaultFilter?: DocFilterType;
  showFilter?: boolean;
}

export const DocumentSection: React.FC<DocumentSectionProps> = ({
  documents,
}) => {
  return (
    <div className="doc-section-wrap">
      {/* Direct Line-by-Line Document List with no foreign category tabs */}
      <div className="doc-list-container">
        {documents.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
};
