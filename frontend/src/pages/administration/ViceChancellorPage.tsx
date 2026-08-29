import AdministrationOfficerPage from '../../components/AdministrationOfficerPage';
import { VICE_CHANCELLOR } from '../../data/administrationContent';

export default function ViceChancellorPage() {
  return (
    <AdministrationOfficerPage
      config={{
        title: 'Vice Chancellor',
        intro: VICE_CHANCELLOR.intro,
        name: VICE_CHANCELLOR.name,
        role: VICE_CHANCELLOR.role,
        subtitle: VICE_CHANCELLOR.subtitle,
        photo: VICE_CHANCELLOR.contact.photo,
        emails: VICE_CHANCELLOR.contact.emails,
        phone: VICE_CHANCELLOR.contact.phone,
        officeAddress: VICE_CHANCELLOR.contact.officeAddress,
        sections: [
          {
            heading: 'Academic Qualifications & International Research',
            items: VICE_CHANCELLOR.qualifications,
          },
          {
            heading: 'Professional Experience & IIT Kanpur Tenure',
            items: VICE_CHANCELLOR.experience,
          },
          {
            heading: 'Research Breakthroughs & Scholarly Contributions',
            items: VICE_CHANCELLOR.researchAndAchievements,
          },
          {
            heading: 'Vision, Role & Responsibilities at RGUKT-AP',
            items: VICE_CHANCELLOR.roleAndVision,
          },
        ],
        documents: VICE_CHANCELLOR.documents,
        sourceUrl: 'https://www.rgukt.in/administration/vice-chancellor/',
        sourceLabel: 'rgukt.in — Vice Chancellor',
      }}
    />
  );
}
