import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowLinkComponent } from './arrow-link.component';

describe('ArrowLinkComponent', () => {
  let component: ArrowLinkComponent;
  let fixture: ComponentFixture<ArrowLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowLinkComponent]
    });
    fixture = TestBed.createComponent(ArrowLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
