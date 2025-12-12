import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlButtonsComponent } from './control-buttons.component';

describe('ControlButtonsComponent', () => {
  let component: ControlButtonsComponent;
  let fixture: ComponentFixture<ControlButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlButtonsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
