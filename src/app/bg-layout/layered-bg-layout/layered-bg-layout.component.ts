import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-layered-bg-layout',
    imports: [],
    templateUrl: './layered-bg-layout.component.html',
    styleUrl: './layered-bg-layout.component.scss'
})
export class LayeredBgLayoutComponent {
 @Input() cardWidth = '850px';
  @Input() cardHeight = '420px';
}
