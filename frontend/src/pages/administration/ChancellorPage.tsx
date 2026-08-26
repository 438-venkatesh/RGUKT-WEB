import AdministrationOfficerPage from '../../components/AdministrationOfficerPage';
import { CHANCELLOR } from '../../data/administrationContent';
import { CHANCELLOR_MESSAGE } from '../../data/officers';

export default function ChancellorPage() {
  return (
    <AdministrationOfficerPage
      config={{
        title: 'Chancellor',
        intro: CHANCELLOR.intro,
        name: CHANCELLOR.name,
        role: CHANCELLOR.role,
        subtitle: CHANCELLOR.subtitle,
        photo: CHANCELLOR.contact.photo ?? '/people/chancellor.jpg',
        emails: [CHANCELLOR.contact.email],
        phone: CHANCELLOR.contact.phone,
        officeAddress: CHANCELLOR.contact.officeAddress,
        sections: [
          { heading: 'Profile & Background', items: CHANCELLOR.profile },
          {
            heading: 'Message from the Chancellor',
            paragraphs: CHANCELLOR_MESSAGE.split('\n\n').filter(Boolean),
          },
        ],
        documents: CHANCELLOR.documents,
        sourceUrl: 'https://www.rgukt.in/administration/chancellor/',
        sourceLabel: 'rgukt.in — Chancellor',
      }}
    />
  );
}
