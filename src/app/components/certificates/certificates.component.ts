import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
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
