import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.scss'
})
export class PublicationComponent {
publications = [
    {
      title: 'A survey on cyber law in India: A weapon for controlling Cyber Crimes',
      journal: 'International Journal of Technology',
      year: '2020',
      doi: '10.5958/2231-3915.2020.00010.3',
      link: 'https://www.ijtonline.com/HTMLPaper.aspx?Journal=International%20Journal%20of%20Technology;PID=2020-10-1-10'
    }
  ];
}
