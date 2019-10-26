import { TestBed } from '@angular/core/testing';

import { TelcoService } from './telco.service';

describe('TelcoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelcoService = TestBed.get(TelcoService);
    expect(service).toBeTruthy();
  });
});
