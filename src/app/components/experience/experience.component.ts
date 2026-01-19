import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
experiences = [
    {
      logo: 'rvs.png',
      company: 'RV Solutions Pvt. Ltd.',
      type: 'Full-time',
      duration: 'Sep 2024 – Present · 1 yr 1 mo',
      location: 'Noida, UP · Hybrid (Deployed at Raipur)',
      roles: [
        {
          title: 'Software Developer',
          description: 'Working on government web applications for the Office of the Electoral Officer, Chhattisgarh, as a deployed developer from RV Solutions. Responsible for end-to-end development, maintenance, and enhancement of Angular-Node.js based systems.',
          skills: 'Angular, Node.js, Express.js, MariaDB',
          duration: ''
        }
      ]
    },
    {
      logo: 'nds.png',
      company: 'Nippon Data Systems Ltd.',
      type: 'Full-time',
      duration: 'May 2022 – Aug 2024 · 2 yrs 4 mos',
      location: 'New Delhi · Hybrid (Deployed at Raipur)',
      roles: [
        {
          title: 'Software Developer',
          duration: 'Sep 2023 – Aug 2024 · 1 yr',
          description: 'Served as an on-site developer for the Office of the Electoral Officer, Chhattisgarh. Contributed to large-scale dashboard and complaint monitoring modules using Angular and Node.js.',
          skills: 'Angular, Node.js, +4 skills'
        },
        {
          title: 'Software Developer',
          duration: 'May 2022 – Aug 2023 · 1 yr 4 mos',
          description: 'Developed and maintained government information systems at the National Informatics Centre (NIC), Naya Raipur, including form-intensive applications and performance dashboards.',
          skills: 'Angular, Node.js, +3 skills'
        }
      ]
    },
    {
      logo: 'sbc.png',
      company: 'SBC Exports Ltd.',
      type: 'Full-time',
      duration: 'Jan 2022 – Apr 2022 · 4 mos',
      location: 'Uttar Pradesh · Hybrid  (Deployed at Raipur)',
      roles: [
        {
          title: 'Office Assistance Support Graduate',
          description: 'Supported NIC Raipur team in developing internal web tools and data entry modules using Angular and Node.js.',
          skills: 'Angular, Node.js',
          duration: ''
        }
      ]
    },
    {
      logo: 'nic.jpg',
      company: 'National Informatics Centre, MeitY',
      type: 'Internship',
      duration: 'May 2021 – Nov 2021 · 7 mos',
      location: 'NIC, Atal Nagar, Raipur',
      roles: [
        {
          title: 'Internship Trainee',
          description: 'Assisted in developing internal web applications and performed database management tasks. Learned the full web app lifecycle from development to deployment.',
          skills: 'Node.js, Angular Material, +4 skills',
          duration: ''
        }
      ]
    }
  ];

}
