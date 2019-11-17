import { TestBed } from '@angular/core/testing';

import { DisplayErrorService } from './display-error.service';

describe('DisplayErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayErrorService = TestBed.get(DisplayErrorService);
    expect(service).toBeTruthy();
  });
});
