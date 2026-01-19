import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurBgLayoutComponent } from './blur-bg-layout.component';

describe('BlurBgLayoutComponent', () => {
  let component: BlurBgLayoutComponent;
  let fixture: ComponentFixture<BlurBgLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlurBgLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurBgLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
