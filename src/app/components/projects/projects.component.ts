import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [

    {
      title: 'Complaint Monitoring System',
      description: 'Developed for the Chhattisgarh Government to monitor and manage complaints effectively. Used by CEO, Secretaries, HoDs, DGP, DEOs, SPs, and Commissioners as a centralized platform.',
      tech: 'Angular 18, Angular Material, Node.js, Express.js, MariaDB',
      link: 'https://election.cg.gov.in/cmsapp',
      github: '', // No GitHub
      image: 'cms.png',
      isConfidential: true
    },
    {
      title: 'Kirti Sahu Portfolio',
      description: 'Developed for the Chhattisgarh Government to monitor and manage complaints effectively. Used by CEO, Secretaries, HoDs, DGP, DEOs, SPs, and Commissioners as a centralized platform.',
      tech: 'Angular 18, Angular Material',
      link: 'https://github.com/kirtisahu178',
      github: 'https://github.com/kirtisahu178',
      image: 'portfolio.png',
      isConfidential: false
    },
    {
      title: 'Hindi PDF OCR and Data Extraction System',
      description: 'Built an automated pipeline to extract structured data (voter roll details) from scanned Hindi PDFs. Solved the problem of non-Unicode Devanagari fonts by using OCR and regex-based parsing. Processed 90+ Assembly Constituencies with 150–200 PDFs each (~15,000+ documents). Exported clean datasets into Excel and databases for further analysis.',
      tech: 'Node.js, Express.js, Tesseract.js, Sharp.js, Excel Export (xlsx)',
      link: '', // Not live
      github: 'https://github.com/kirtisahu178',
      image: 'pdf_extracter.png',
      isConfidential: false
    },
    {
      title: 'Polling Personnel Randomization System - Web',
      description: 'Developed for District Collectors in Chhattisgarh. Streamlines duty assignment for polling officers, ensuring fairness and transparency in elections.',
      tech: 'Angular 18, Angular Material, Node.js, Express.js, MSSQL',
      link: 'https://election.cg.gov.in/pprs',
      github: '', // Not public
      image: 'pprs.png',
      isConfidential: true
    },
    {
      title: 'Mission Vatsalya Monitoring System',
      description: 'Developed for the Department of Women and Child Development to monitor and manage programs under Mission Vatsalya effectively.',
      tech: 'Angular 13, Angular Material, Node.js, Express.js, MariaDB',
      link: 'https://missionvatsalya.cg.gov.in/#/main-site/home',
      github: '', // Confidential
      image: 'mvms.png',
      isConfidential: true
    }
  ];


}
