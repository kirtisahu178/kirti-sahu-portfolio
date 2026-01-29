import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CertificatesComponent } from "../certificates/certificates.component";

@Component({
    selector: 'app-education',
    imports: [MaterialModule, CertificatesComponent],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
education = [
    {
      logo: 'prsu.png',
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
}
