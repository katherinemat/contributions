/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrpService } from './crp.service';

describe('CrpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrpService]
    });
  });

  it('should ...', inject([CrpService], (service: CrpService) => {
    expect(service).toBeTruthy();
  }));
});
