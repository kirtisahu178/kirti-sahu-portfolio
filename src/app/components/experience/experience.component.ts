import { Component, computed, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

interface Role {
  title: string;
  description: string;
  skills: string;
  duration?: string;
}

interface Experience {
  logo: string;
  company: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  roles: Role[];
}

interface Tech {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-experience',
  imports: [MaterialModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  searchExp = signal(''); // Search input for experiences
  experiences: Experience[] = [
    {
      logo: 'rvs.png',
      company: 'RV Solutions Pvt. Ltd.',
      type: 'Full-time',
      startDate: '2024-09-01',
      endDate: '', // empty = current
      location: 'Noida, UP · Hybrid (Deployed at Raipur)',
      roles: [
        {
          title: 'Software Developer',
          description: 'Developing and maintaining large-scale government web applications for the Office of the Electoral Officer, Chhattisgarh. Leading end-to-end development of Angular–Node.js systems, including feature enhancement, performance optimization, and production support.',
          skills: 'Angular, Node.js, Express.js, MariaDB',
        }
      ]
    },
    {
      logo: 'nds.png',
      company: 'Nippon Data Systems Ltd.',
      type: 'Full-time',
      // duration: 'May 2022 – Aug 2024 · 2 yrs 4 mos',
      startDate: '2022-05-01',
      endDate: '2024-08-31',
      location: 'New Delhi · Hybrid (Deployed at Raipur)',
      roles: [
        {
          title: 'Software Developer',
          duration: 'Sep 2023 – Aug 2024 · 1 yr',
          description: 'Worked as an on-site developer at the Office of the Electoral Officer, Chhattisgarh, contributing to large-scale dashboards and complaint monitoring systems using Angular and Node.js.',
          skills: 'Angular, Node.js, +4 skills'
        },
        {
          title: 'Software Developer',
          duration: 'May 2022 – Aug 2023 · 1 yr 4 mos',
          description: 'Developed and maintained government information systems at the National Informatics Centre (NIC), Naya Raipur, focusing on form-intensive applications, data-driven dashboards, and performance optimization.',
          skills: 'Angular, Node.js, +3 skills'
        }
      ]
    },
    {
      logo: 'sbc.png',
      company: 'SBC Exports Ltd.',
      type: 'Full-time',
      // duration: 'Jan 2022 – Apr 2022 · 4 mos',
      startDate: '2022-01-01',
      endDate: '2022-04-30',
      location: 'Uttar Pradesh · Hybrid  (Deployed at Raipur)',
      roles: [
        {
          title: 'Office Assistance Support Graduate',
          description: 'Supported the NIC Raipur team in building internal web tools and data entry modules using Angular and Node.js, gaining hands-on experience in government application workflows.',
          skills: 'Angular, Node.js',
        }
      ]
    },
    {
      logo: 'nic.jpg',
      company: 'National Informatics Centre, MeitY',
      type: 'Internship',
      // duration: 'May 2021 – Nov 2021 · 7 mos',
      startDate: '2021-05-01',
      endDate: '2021-11-30',
      location: 'NIC, Atal Nagar, Raipur',
      roles: [
        {
          title: 'Internship Trainee',
          description: 'Assisted in developing internal web applications and managing databases at NIC. Gained hands-on exposure to the complete web application lifecycle, from development and testing to deployment.',
          skills: 'Node.js, Angular Material, +4 skills',
        }
      ]
    }
  ];

  responsibilities = signal<string[]>([
    'Developed and maintained dynamic web applications using Angular and Node.js',
    'Designed, implemented, and secured RESTful APIs for internal and public-facing systems',
    'Collaborated with NIC and Government departments to deliver compliant and scalable solutions',
    'Managed relational databases, optimized queries, and ensured data integrity',
    'Implemented authentication, authorization, and application security modules',
    'Resolved security audit findings and vulnerability observations across multiple applications'
  ]);



  techStack: Tech[] = [
    { name: 'Angular', icon: 'angular.png' },
    { name: 'Node.js', icon: 'nodejs.png' },
    { name: 'Express.js', icon: 'expressjs.png' },
    { name: 'MariaDB', icon: 'mariadb.png' },
    { name: 'MySQL', icon: 'mysql.png' },
    { name: 'MSSQL', icon: 'mssql-removebg-preview.png' },
    { name: 'HTML5', icon: 'html5.png' },
    { name: 'CSS3', icon: 'css3.png' },
    { name: 'JavaScript', icon: 'javascript.png' },
    { name: 'TypeScript', icon: 'typescript.png' },
    { name: 'Angular Material', icon: 'material.png' }
  ];

  // --------------- COMPUTED FILTER ----------------
  filteredExperiences = computed(() => {
    const term = this.searchExp().toLowerCase().trim();

    if (!term) return this.experiences;

    return this.experiences.filter(exp =>
      [
        exp.company,
        exp.type,
        exp.location,
        exp.startDate,
        exp.endDate,
        ...exp.roles.map(r =>
          `${r.title} ${r.description} ${r.skills}`
        )
      ]
        .join(' ')
        .toLowerCase()
        .includes(term)
    );
  });

  getDuration(startDateStr: string, endDateStr?: string): string {
    const startDate = new Date(startDateStr);
    const endDate = endDateStr ? new Date(endDateStr) : new Date();

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    const days = endDate.getDate() - startDate.getDate();

    // if (days < 0) months--;
    if (days >= 0) months++;

    if (months < 0) {
      years--;
      months += 12;
    }

    let duration = '';
    if (years > 0) duration += `${years} yr${years > 1 ? 's' : ''} `;
    if (months > 0) duration += `${months} mo${months > 1 ? 's' : ''}`;
    return duration.trim();
  }






}
