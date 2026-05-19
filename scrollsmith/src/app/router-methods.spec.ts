import { TestBed } from '@angular/core/testing';

import { RouterMethods } from './router-methods';

describe('RouterMethods', () => {
  let service: RouterMethods;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterMethods);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
