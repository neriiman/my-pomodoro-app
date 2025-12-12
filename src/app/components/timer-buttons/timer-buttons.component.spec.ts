import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerButtonsComponent } from './timer-buttons.component';

describe('TimerButtonsComponent', () => {
  let component: TimerButtonsComponent;
  let fixture: ComponentFixture<TimerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimerButtonsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
