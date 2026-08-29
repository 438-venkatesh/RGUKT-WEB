import PersonSquareCard from './PersonSquareCard';
import { CouncilGroupIconDisplay } from './AdministrationIcons';
import type { GoverningCouncilGroup } from '../data/administrationContent';
import type { useSectionTheme } from './SectionPageLayout';

function designationLabel(designation: string): string {
  return designation.replace('/', ' / ');
}

export default function CouncilMemberGrid({
  group,
  c,
}: {
  group: GoverningCouncilGroup;
  c: ReturnType<typeof useSectionTheme>;
}) {
  const isExecutive = group.id === 'executive';
  const gridClass = isExecutive
    ? 'about-people-grid about-people-grid-leadership gc-leadership-grid'
    : 'about-people-grid about-directors-grid';

  return (
    <section className="gc-section">
      <div className="gc-section-head">
        <span className="gc-section-icon" style={{ background: `${c.accent}14`, color: c.accent }}>
          <CouncilGroupIconDisplay type={group.icon} color={c.accent} />
        </span>
        <h2 className="gc-section-title" style={{ color: c.text }}>{group.title}</h2>
      </div>
      <div className={gridClass}>
        {group.members.map(member => (
          <PersonSquareCard
            key={`${group.id}-${member.name}-${member.role}`}
            href={member.href}
            photo={member.photo ?? '/people/chancellor.jpg'}
            name={member.name}
            label={member.role}
            note={designationLabel(member.designation)}
          />
        ))}
      </div>
    </section>
  );
}
