import { TestBed, inject } from '@angular/core/testing';

import { WhereIsApiServiceService } from './where-is-api-service.service';

describe('WhereIsApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhereIsApiServiceService]
    });
  });

  it('should be created', inject([WhereIsApiServiceService], (service: WhereIsApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
