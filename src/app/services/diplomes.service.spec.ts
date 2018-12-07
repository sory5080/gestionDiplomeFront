import { TestBed } from '@angular/core/testing';

import { DiplomesService } from './diplomes.service';

describe('DiplomesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiplomesService = TestBed.get(DiplomesService);
    expect(service).toBeTruthy();
  });
});
