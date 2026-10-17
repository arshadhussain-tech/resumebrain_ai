import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescriptionForm } from './job-description-form';

describe('JobDescriptionForm', () => {
  let component: JobDescriptionForm;
  let fixture: ComponentFixture<JobDescriptionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDescriptionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDescriptionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
