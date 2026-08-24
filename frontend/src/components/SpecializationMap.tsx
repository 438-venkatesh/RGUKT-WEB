import React from 'react';
import { ArrowRight, Cpu, Atom, Building2, Settings } from 'lucide-react';
import { SPECIALIZATION_MAP } from '../data/postgraduatePrograms';
import './SpecializationMap.css';

export const SpecializationMap: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={22} />;
      case 'Atom':
        return <Atom size={22} />;
      case 'Building2':
        return <Building2 size={22} />;
      case 'Settings':
        return <Settings size={22} />;
      default:
        return <Cpu size={22} />;
    }
  };

  return (
    <div className="spec-map-container">
      {SPECIALIZATION_MAP.map((item) => (
        <div key={item.pgCode} className="spec-map-row">
          {/* UG Side */}
          <div className="spec-ug-side">
            <div className="spec-icon-box">{getIcon(item.icon)}</div>
            <div className="spec-ug-info">
              <span className="spec-ug-code">{item.ugCode} Foundation</span>
              <h4 className="spec-ug-title">{item.ugBranch}</h4>
            </div>
          </div>

          {/* Connected Arrow */}
          <div className="spec-arrow-center">
            <ArrowRight size={22} />
          </div>

          {/* PG Side */}
          <div className="spec-pg-side">
            <div className="spec-pg-header">
              <h4 className="spec-pg-title">{item.pgSpecialization}</h4>
              <span className="spec-pg-badge">{item.pgCode}</span>
            </div>
            <p className="spec-pg-focus">{item.focusArea}</p>
            <span className="spec-pg-industry">Target Industry: {item.industryAlignment}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecializationMap;
