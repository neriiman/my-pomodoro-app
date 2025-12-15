import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeButtonsComponent } from './mode-buttons.component';

describe('TimerButtonsComponent', () => {
  let component: ModeButtonsComponent;
  let fixture: ComponentFixture<ModeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModeButtonsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
