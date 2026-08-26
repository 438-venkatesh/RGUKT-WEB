import AdministrationOfficerPage from '../../components/AdministrationOfficerPage';
import { DEAN_EVALUATION } from '../../data/administrationContent';

export default function DeanEvaluationPage() {
  return (
    <AdministrationOfficerPage
      config={{
        title: 'Dean of Evaluation',
        intro: DEAN_EVALUATION.intro,
        name: DEAN_EVALUATION.name,
        role: DEAN_EVALUATION.designation,
        subtitle: DEAN_EVALUATION.subtitle,
        photo: DEAN_EVALUATION.contact.photo,
        emails: [DEAN_EVALUATION.contact.email, DEAN_EVALUATION.contact.alternateEmail],
        phone: DEAN_EVALUATION.contact.phone,
        officeAddress: DEAN_EVALUATION.contact.officeAddress,
        sections: [
          { heading: 'Academic Qualifications', items: DEAN_EVALUATION.qualifications },
          { heading: 'Examination Administration & Responsibilities', items: DEAN_EVALUATION.responsibilities },
          { heading: 'Teaching & Research', items: DEAN_EVALUATION.teachingAndResearch },
        ],
        sourceUrl: 'https://www.rgukt.in/administration/dean-evaluation/',
        sourceLabel: 'rgukt.in — Dean of Evaluation',
      }}
    />
  );
}
