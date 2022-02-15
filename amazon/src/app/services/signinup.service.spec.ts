import { TestBed } from '@angular/core/testing';

import { SigninupService } from './signinup.service';

describe('SigninupService', () => {
  let service: SigninupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
