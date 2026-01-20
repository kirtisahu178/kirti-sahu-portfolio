
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { LayeredBgLayoutComponent } from './bg-layout/layered-bg-layout/layered-bg-layout.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [
    MaterialModule,
    RouterModule,
    LayeredBgLayoutComponent,
    CommonModule
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly THEME_KEY = 'selected-theme-name';
  readonly MODE_KEY = 'is-dark-mode';
  readonly allowedThemes = ['new-1', 'new-2', 'new-3', 'new-4', 'new-5', 'new-6', 'new-7', 'new-8', 'new-9', 'new-10', 'new-11', 'new-12'];
  selectedBaseTheme: string = 'new-11';
  isDarkMode: boolean = false;

  showMobileMenu = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  themes = [
    {
      themeName: 'new-1',
      label: 'Red Violet',
      bgDark: '#690100', //20
      bgLight: '#fff8f6', //98
      toolContDark: '#7e0100', //25
      toolContLight: '#ffedea', //95
      miniTextDark: '#ecdcff', //90
      miniTextLight: '#5f00c0', //30
      headBtnDark: '#ff8a78', //70
      headBtnLight: '#c00100', //40
    },
    {
      themeName: 'new-2',
      label: 'Green Magenta',
      bgDark: '#013a00', //20
      bgLight: '#edffe1', //98
      toolContDark: '#014600', //25
      toolContLight: '#cbffb8', //95
      miniTextDark: '#ffd7f5', //90
      miniTextLight: '#810081', //30
      headBtnDark: '#03c700', //70
      headBtnLight: '#026e00', //40
    },
    {
      themeName: 'new-3',
      label: 'Blue Orange',
      bgDark: '#0001ac', //20
      bgLight: '#fbf8ff', //98
      toolContDark: '#0001cd', //25
      toolContLight: '#f1efff', //95
      miniTextDark: '#ffdcc7', //90
      miniTextLight: '#723600', //30
      headBtnDark: '#9da3ff', //70
      headBtnLight: '#343dff', //40
    },
    {
      themeName: 'new-4',
      label: 'Yellow Blue',
      bgDark: '#323200', //20
      bgLight: '#fffeac', //98
      toolContDark: '#3e3e00', //25
      toolContLight: '#f9f900', //95
      miniTextDark: '#e0e0ff', //90
      miniTextLight: '#0000ef', //30
      headBtnDark: '#b1b100', //70
      headBtnLight: '#626200', //40
    },
    {
      themeName: 'new-5',
      label: 'Cyan Rose',
      bgDark: '#003737', //20
      bgLight: '#e2fffe', //98
      toolContDark: '#004343', //25
      toolContLight: '#adfffe', //95
      miniTextDark: '#ffd9e1', //90
      miniTextLight: '#8f0045', //30
      headBtnDark: '#00bebe', //70
      headBtnLight: '#006a6a', //40
    },
    {
      themeName: 'new-6',
      label: 'Magenta Orange',
      bgDark: '#5b005b', //20
      bgLight: '#fff7f9', //98
      toolContDark: '#6e006e', //25
      toolContLight: '#ffebf8', //95
      miniTextDark: '#ffdcc7', //90
      miniTextLight: '#723600', //30
      headBtnDark: '#ff76f6', //70
      headBtnLight: '#a900a9', //40
    },
    {
      themeName: 'new-7',
      label: 'Orange Green',
      bgDark: '#502400', //20
      bgLight: '#fff8f5', //98
      toolContDark: '#612d00', //25
      toolContLight: '#ffede4', //95
      miniTextDark: '#77ff61', //90
      miniTextLight: '#015300', //30
      headBtnDark: '#ff8e36', //70
      headBtnLight: '#964900', //40
    },
    {
      themeName: 'new-8',
      label: 'Chartreuse Azure',
      bgDark: '#173800', //20
      bgLight: '#eeffdc', //98
      toolContDark: '#1e4400', //25
      toolContLight: '#cfffa9', //95
      miniTextDark: '#d7e3ff', //90
      miniTextLight: '#00458f', //30
      headBtnDark: '#60c100', //70
      headBtnLight: '#326b00', //40
    },
    {
      themeName: 'new-9',
      label: 'Spring Violet',
      bgDark: '#003917', //20
      bgLight: '#eaffe9', //98
      toolContDark: '#00461e', //25
      toolContLight: '#c4ffcb', //95
      miniTextDark: '#ecdcff', //90
      miniTextLight: '#5f00c0', //30
      headBtnDark: '#00c561', //70
      headBtnLight: '#006d33', //40
    },
    {
      themeName: 'new-10',
      label: 'Azure Rose',
      bgDark: '#002f65', //20
      bgLight: '#f9f9ff', //98
      toolContDark: '#003a7a', //25
      toolContLight: '#ecf0ff', //95
      miniTextDark: '#ffd9e1', //90
      miniTextLight: '#8f0045', //30
      headBtnDark: '#7cabff', //70
      headBtnLight: '#005cbb', //40
    },
    {
      themeName: 'new-11',
      label: 'Violet Yellow',
      bgDark: '#42008a', //20
      bgLight: '#fef7ff', //98
      toolContDark: '#5000a4', //25
      toolContLight: '#f7edff', //95
      miniTextDark: '#eaea00', //90
      miniTextLight: '#494900', //30
      headBtnDark: '#bf98ff', //70
      headBtnLight: '#7d00fa', //40
    },
    {
      themeName: 'new-12',
      label: 'Rose Blue',
      bgDark: '#65002f', //20
      bgLight: '#fff8f8', //98
      toolContDark: '#7a003a', //25
      toolContLight: '#ffecef', //95
      miniTextDark: '#e0e0ff', //90
      miniTextLight: '#0000ef', //30
      headBtnDark: '#ff84a9', //70
      headBtnLight: '#ba005c', //40
    },
  ];

  constructor(private router: Router) { }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    const savedMode = localStorage.getItem(this.MODE_KEY);

    // Validate theme
    if (savedTheme && this.allowedThemes.includes(savedTheme)) {
      this.selectedBaseTheme = savedTheme;
    } else {
      localStorage.setItem(this.THEME_KEY, this.selectedBaseTheme);
    }

    // Validate mode
    if (savedMode === 'true' || savedMode === 'false') {
      this.isDarkMode = savedMode === 'true';
    } else {
      localStorage.setItem(this.MODE_KEY, String(this.isDarkMode));
    }

    // if (savedTheme) {
    //   this.selectedBaseTheme = savedTheme;
    // }

    // this.isDarkMode = savedMode === 'true';
    this.updateThemeClass();
  }

  applyTheme(themeName: string): void {
    this.selectedBaseTheme = themeName;
    localStorage.setItem(this.THEME_KEY, themeName);
    this.updateThemeClass();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem(this.MODE_KEY, String(this.isDarkMode));
    this.updateThemeClass();
  }

  private updateThemeClass(): void {
    const previousClasses = Array.from(document.body.classList).filter(c =>
      c.endsWith('-light-theme') || c.endsWith('-dark-theme')
    );
    previousClasses.forEach(c => document.body.classList.remove(c));
    const mode = this.isDarkMode ? 'dark' : 'light';
    const newClass = `${this.selectedBaseTheme}-${mode}-theme`;
    document.body.classList.add(newClass);
    localStorage.setItem('theme', newClass);
  }

}

