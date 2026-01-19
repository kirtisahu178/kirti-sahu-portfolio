import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

import { TechComponent } from "../tech/tech.component";

// Define the structure for a skill item
interface Skill {
  id: number;
  title: string;
  icon: string; // Material Icon name
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
    }
 ]);
}
