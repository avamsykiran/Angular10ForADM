import { TestBed } from '@angular/core/testing';

import { ArthService } from './arth.service';

//describe is used to create test suites
//it method is used to create a test case
//beforeEach accepts a methods and execute it before running any test case in this test suite.
//afterEach accepts a methods and execute it before running any test case in this test suite.

describe('ArthService', () => {
  let service: ArthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('add', () => {
    it('should return 4 given 2 and 2', () => {
      expect(service.add(2, 2)).toBe(4);
    });

    it('should return 4 given 4 and 0', () => {
      expect(service.add(4, 0)).toBe(4);
    });
  });

  describe('substract',()=>{
    it('should return 0 given 4 and 4',()=>{
      expect(service.substract(4,4)).toBe(0);
    });
    it('should return 4 given 4 and 0',()=>{
      expect(service.substract(4,0)).toBe(4);
    });
    it('should return -4 given 0 and 4',()=>{
      expect(service.substract(0,4)).toBe(-4);
    });
  });
});
