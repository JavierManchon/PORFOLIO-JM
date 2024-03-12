import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSkillsComponent } from './back-skills.component';

describe('BackSkillsComponent', () => {
  let component: BackSkillsComponent;
  let fixture: ComponentFixture<BackSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackSkillsComponent]
    });
    fixture = TestBed.createComponent(BackSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
