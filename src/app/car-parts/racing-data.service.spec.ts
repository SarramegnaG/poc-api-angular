/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RacingDataService } from './racing-data.service';

describe('Service: RacingData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RacingDataService]
    });
  });

  it('should ...', inject([RacingDataService], (service: RacingDataService) => {
    expect(service).toBeTruthy();
  }));
});
