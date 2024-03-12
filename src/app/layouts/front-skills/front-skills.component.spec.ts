import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSkillsComponent } from './front-skills.component';

describe('FrontSkillsComponent', () => {
  let component: FrontSkillsComponent;
  let fixture: ComponentFixture<FrontSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontSkillsComponent]
    });
    fixture = TestBed.createComponent(FrontSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
