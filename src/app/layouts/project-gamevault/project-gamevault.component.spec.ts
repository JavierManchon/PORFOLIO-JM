import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGamevaultComponent } from './project-gamevault.component';

describe('ProjectGamevaultComponent', () => {
  let component: ProjectGamevaultComponent;
  let fixture: ComponentFixture<ProjectGamevaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectGamevaultComponent]
    });
    fixture = TestBed.createComponent(ProjectGamevaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
