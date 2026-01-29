
import { Component, signal } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
    selector: 'app-about',
    imports: [MaterialModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent {
  yearsExp = signal(0);

  constructor() {
    this.calculateExperience();
  }

  calculateExperience() {
    const startDate = new Date('2022-01-01');
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    // Adjust if current month/day hasn't reached start month/day yet
    const m = today.getMonth() - startDate.getMonth();
    const d = today.getDate() - startDate.getDate();
    if (m < 0 || (m === 0 && d < 0)) {
      years--;
    }

    this.yearsExp.set(years);
  }
}
