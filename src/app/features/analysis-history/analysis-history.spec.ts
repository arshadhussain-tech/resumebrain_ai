import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisHistory } from './analysis-history';

describe('AnalysisHistory', () => {
  let component: AnalysisHistory;
  let fixture: ComponentFixture<AnalysisHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
