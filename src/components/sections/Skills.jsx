import Section from '../layout/Section.jsx';
import Card from '../ui/Card.jsx';
import Chip from '../ui/Chip.jsx';
import { StaggerGroup, StaggerItem } from '../ui/Stagger.jsx';
import { skillGroups } from '../../data/skills.js';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title="What I work with"
      lead="Tools I reach for across the ML and product stack."
    >
      <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <StaggerItem key={group.title}>
              <Card>
                <div className="flex items-center gap-3">
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-sky-500 text-white shadow-soft ring-1 ring-inset ring-white/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
