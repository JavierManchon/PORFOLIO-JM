import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedButtonsComponent } from './expanded-buttons.component';

describe('ExpandedButtonsComponent', () => {
  let component: ExpandedButtonsComponent;
  let fixture: ComponentFixture<ExpandedButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandedButtonsComponent]
    });
    fixture = TestBed.createComponent(ExpandedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
