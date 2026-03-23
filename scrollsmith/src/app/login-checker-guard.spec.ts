import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginCheckerGuard } from './login-checker-guard';

describe('loginCheckerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginCheckerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
