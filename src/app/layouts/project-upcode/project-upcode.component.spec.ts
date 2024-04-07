import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUpcodeComponent } from './project-upcode.component';

describe('ProjectUpcodeComponent', () => {
  let component: ProjectUpcodeComponent;
  let fixture: ComponentFixture<ProjectUpcodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectUpcodeComponent]
    });
    fixture = TestBed.createComponent(ProjectUpcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
