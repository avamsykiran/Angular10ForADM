import { TestBed } from '@angular/core/testing';

import { NumberSeriesService } from './number-series.service';

describe('NumberSeriesService', () => {
  let service: NumberSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
