import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayeredBgLayoutComponent } from './layered-bg-layout.component';

describe('LayeredBgLayoutComponent', () => {
  let component: LayeredBgLayoutComponent;
  let fixture: ComponentFixture<LayeredBgLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayeredBgLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayeredBgLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
