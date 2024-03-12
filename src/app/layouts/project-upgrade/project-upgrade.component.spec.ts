import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUpgradeComponent } from './project-upgrade.component';

describe('ProjectUpgradeComponent', () => {
  let component: ProjectUpgradeComponent;
  let fixture: ComponentFixture<ProjectUpgradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectUpgradeComponent]
    });
    fixture = TestBed.createComponent(ProjectUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
