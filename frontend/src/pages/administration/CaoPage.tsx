import AdministrationOfficerPage from '../../components/AdministrationOfficerPage';
import { CAO } from '../../data/administrationContent';

export default function CaoPage() {
  return (
    <AdministrationOfficerPage
      config={{
        title: 'Chief Administrative Officer',
        intro: CAO.intro,
        name: CAO.name,
        role: CAO.designation,
        subtitle: CAO.subtitle,
        photo: CAO.contact.photo,
        emails: [CAO.contact.email, CAO.contact.alternateEmail],
        phone: CAO.contact.phone,
        officeAddress: CAO.contact.officeAddress,
        sections: [
          { heading: 'Academic Qualifications', items: CAO.qualifications },
          { heading: 'Administrative Responsibilities', items: CAO.responsibilities },
          { heading: 'Research, Projects & Patents', items: CAO.researchAndProjects },
        ],
        sourceUrl: 'https://www.rgukt.in/administration/chief-administrative-officer/',
        sourceLabel: 'rgukt.in — Chief Administrative Officer',
      }}
    />
  );
}
