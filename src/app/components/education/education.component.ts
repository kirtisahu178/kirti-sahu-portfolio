import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';
import { CertificatesComponent } from "../certificates/certificates.component";
import { PublicationComponent } from "../publication/publication.component";

@Component({
    selector: 'app-education',
    imports: [MaterialModule, CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
education = [
    {
      logo: 'prsu.png', // replace with your university logo
      university: 'Pt. Ravishankar Shukla University, Raipur',
      degree: "Master's degree, Information Technology",
      duration: '2019 - 2021'
    },
    {
      logo: 'prsu.png',
      university: 'Pt. Ravishankar Shukla University, Raipur',
      degree: "Bachelor's degree, Computer Science",
      duration: '2017 - 2019'
    }
  ];

  certifications = [
    {
      title: 'Web Development Bootcamp [MERN STACK]',
      provider: 'Code Help',
      year: '2024',
      logo: 'codehelp.png', // put your logo here
      link: 'https://learn.thecodehelp.in/share-certificate?serialno=V9Q6OR7L'
    }
  ];
}
