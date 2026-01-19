import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { LayeredBgLayoutComponent } from './bg-layout/layered-bg-layout/layered-bg-layout.component';

@Component({
    selector: 'app-root',
    imports: [
        MaterialModule,
        CommonModule,
        RouterModule,
        LayeredBgLayoutComponent,
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
      label: 'Crimson Orchid',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-2',
      label: 'Lotus Bloom',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-3',
      label: 'Sunset Bluebell',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-4',
      label: 'Golden Iris',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-5',
      label: 'Aqua Lily',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-6',
      label: 'Flaming Dahlia',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-7',
      label: 'Marigold Leaf',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-8',
      label: 'Morning Glory',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-9',
      label: 'Lavender Fern',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-10',
      label: 'Sky Mirage',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-11',
      label: 'Royal Iris',
      icon: 'red-orchid.jpg'
    },
    {
      themeName: 'new-12',
      label: 'Blush Frost',
      icon: 'red-orchid.jpg'
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

