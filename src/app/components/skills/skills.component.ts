import { Component, signal, computed } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

import { TechComponent } from "../tech/tech.component";

// Define the structure for a skill item
interface Skill {
  id: number;
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  imports: [MaterialModule, TechComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = signal<Skill[]>([
    {
      id: 1,
      icon: 'palette',
      title: 'Frontend Development',
      description: 'Designing and building responsive UIs with reusable Angular components.'
    },
    {
      id: 2,
      icon: 'engineering',
      title: 'Backend Development',
      description: 'Developing secure RESTful APIs, managing server-side logic, and handling authentication / authorization.'
    },
    {
      id: 3,
      icon: 'storage',
      title: 'Database Management',
      description: 'Designing, maintaining, and optimizing relational databases for security and performance.'
    },
    {
      id: 4,
      icon: 'groups',
      title: 'Project Coordination',
      description: 'Collaborating with cross-functional teams to define requirements, plan features, and deliver projects.'
    },
    {
      id: 5,
      icon: 'settings_suggest',
      title: 'Technical Support',
      description: 'Troubleshooting production issues, debugging, and optimizing performance for deployed apps.'
    },
    {
      id: 6,
      icon: 'security',
      title: 'Security Audit & Compliance',
      description: 'Identifying and resolving application security issues, including vulnerability analysis, audit observations, and remediation of findings.'
    }

  ]);

  searchSkill = signal('');

  filteredSkills = computed(() => {
    const term = this.searchSkill().toLowerCase();

    if (!term) {
      return this.skills();
    }

    return this.skills().filter(skill =>
      skill.title.toLowerCase().includes(term) ||
      skill.description.toLowerCase().includes(term)
    );
  });

}
