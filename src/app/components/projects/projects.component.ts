import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';


@Component({
    selector: 'app-projects',
    imports: [MaterialModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
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
      title: 'Portfolio',
      description: 'A modern, responsive personal portfolio showcasing my projects, skills, and experience as a Software Developer, built with a modern UI and responsive design to highlight projects and technical expertise.',
      tech: 'Angular, Angular Material',
      link: 'https://github.com/kirtisahu178',
      github: 'https://github.com/kirtisahu178',
      image: 'portfolio.png',
      isConfidential: false
    },
    {
      title: 'Complaint Monitoring System',
      description: 'Developed for the Chhattisgarh Government to monitor and manage complaints effectively. Used by CEO, Secretaries, HoDs, DGP, DEOs, SPs, and Commissioners as a centralized platform.',
      tech: 'Angular, Angular Material, Node.js, Express.js, MariaDB',
      link: 'https://election.cg.gov.in/cmsapp',
      github: '', // No GitHub
      image: 'cms.png',
      isConfidential: true
    },
    {
      title: 'Polling Personnel Randomization System - Web',
      description: 'Developed for District Collectors in Chhattisgarh. Streamlines duty assignment for polling officers, ensuring fairness and transparency in elections.',
      tech: 'Angular, Angular Material, Node.js, Express.js, MSSQL',
      link: 'https://election.cg.gov.in/pprs',
      github: '', // Not public
      image: 'pprs.png',
      isConfidential: true
    },
    {
      title: 'Mission Vatsalya Monitoring System',
      description: 'Developed for the Department of Women and Child Development to monitor and manage programs under Mission Vatsalya effectively.',
      tech: 'Angular, Angular Material, Node.js, Express.js, MariaDB',
      link: 'https://missionvatsalya.cg.gov.in/#/main-site/home',
      github: '', // Confidential
      image: 'mvms.png',
      isConfidential: true
    }
  ];


}
