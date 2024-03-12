import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningSkillsComponent } from './learning-skills.component';

describe('LearningSkillsComponent', () => {
  let component: LearningSkillsComponent;
  let fixture: ComponentFixture<LearningSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearningSkillsComponent]
    });
    fixture = TestBed.createComponent(LearningSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
