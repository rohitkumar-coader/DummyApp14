import { TestBed } from '@angular/core/testing';

import { Auth1Interceptor } from './auth1.interceptor';

describe('Auth1Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Auth1Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Auth1Interceptor = TestBed.inject(Auth1Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
