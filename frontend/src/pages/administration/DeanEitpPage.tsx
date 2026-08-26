import AdministrationOfficerPage from '../../components/AdministrationOfficerPage';
import { DEAN_EITP } from '../../data/administrationContent';

export default function DeanEitpPage() {
  return (
    <AdministrationOfficerPage
      config={{
        title: 'Dean of EITP',
        intro: DEAN_EITP.intro,
        name: DEAN_EITP.name,
        role: DEAN_EITP.designation,
        subtitle: DEAN_EITP.subtitle,
        photo: DEAN_EITP.contact.photo,
        emails: [DEAN_EITP.contact.email, DEAN_EITP.contact.alternateEmail],
        phone: `${DEAN_EITP.contact.phone} / ${DEAN_EITP.contact.alternatePhone}`,
        officeAddress: DEAN_EITP.contact.officeAddress,
        sections: [
          { heading: 'Academic Qualifications', items: DEAN_EITP.qualifications },
          { heading: 'Directorate Responsibilities', items: DEAN_EITP.responsibilities },
          { heading: 'Global & Regional Design Awards', items: DEAN_EITP.awards },
          { heading: 'Administrative Leadership', items: DEAN_EITP.administrativeLeadership },
          { heading: 'Teaching & Research', items: DEAN_EITP.teachingAndResearch },
        ],
        sourceUrl: 'https://www.rgukt.in/administration/dean-eitp/',
        sourceLabel: 'rgukt.in — Dean of EITP',
      }}
    />
  );
}
