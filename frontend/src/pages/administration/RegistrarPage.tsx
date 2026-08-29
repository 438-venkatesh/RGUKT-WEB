import AdministrationOfficerPage from '../../components/AdministrationOfficerPage';
import { REGISTRAR } from '../../data/administrationContent';

export default function RegistrarPage() {
  return (
    <AdministrationOfficerPage
      config={{
        title: 'Registrar',
        intro: REGISTRAR.intro,
        name: REGISTRAR.name,
        role: REGISTRAR.role,
        subtitle: REGISTRAR.subtitle,
        photo: REGISTRAR.contact.photo,
        emails: REGISTRAR.contact.emails,
        phone: REGISTRAR.contact.phone,
        officeAddress: REGISTRAR.contact.officeAddress,
        sections: [
          { heading: 'Academic Qualifications', items: REGISTRAR.qualifications },
          { heading: 'Professional Experience', items: REGISTRAR.experience },
          { heading: 'Statutory Responsibilities', items: REGISTRAR.responsibilities },
          { heading: 'Research & Consultancy', items: REGISTRAR.researchAndConsultancy },
          { heading: 'Recent Engagements', items: REGISTRAR.recentEngagements },
        ],
        documents: REGISTRAR.documents,
        sourceUrl: 'https://www.rgukt.in/administration/registrar/',
        sourceLabel: 'rgukt.in — Registrar',
      }}
    />
  );
}
