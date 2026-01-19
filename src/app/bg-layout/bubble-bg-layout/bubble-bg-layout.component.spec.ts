import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleBgLayoutComponent } from './bubble-bg-layout.component';

describe('BubbleBgLayoutComponent', () => {
  let component: BubbleBgLayoutComponent;
  let fixture: ComponentFixture<BubbleBgLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleBgLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleBgLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
