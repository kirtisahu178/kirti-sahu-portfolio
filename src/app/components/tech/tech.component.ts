
import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
    selector: 'app-tech',
    imports: [MaterialModule],
    templateUrl: './tech.component.html',
    styleUrl: './tech.component.scss'
})
export class TechComponent {
techStack = [
    { name: 'Angular', logo: 'angular.png' },
    { name: 'Node.js', logo: 'nodejs.png' },
    { name: 'Express.js', logo: 'expressjs.png' },
    { name: 'HTML5', logo: 'html5.png' },
    { name: 'CSS3', logo: 'css3.png' },
    { name: 'JavaScript', logo: 'javascript.png' },
    { name: 'TypeScript', logo: 'typescript.png' },
    { name: 'Angular Material', logo: 'material.png' },
    { name: 'Bootstrap 5', logo: 'bootstrap.png' },
    { name: 'SASS', logo: 'sass.png' },
    { name: 'Git', logo: 'git.png' },
    { name: 'GitHub', logo: 'github.png' },
    { name: 'MariaDB', logo: 'mariadb.png' },
    { name: 'MySQL', logo: 'mysql.png' },
    { name: 'MSSQL', logo: 'mssql-removebg-preview.png' },
  ];

}
