import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCommitmentSectionComponent } from './project-commitment-section.component';

describe('ProjectCommitmentSectionComponent', () => {
  let component: ProjectCommitmentSectionComponent;
  let fixture: ComponentFixture<ProjectCommitmentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCommitmentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCommitmentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
