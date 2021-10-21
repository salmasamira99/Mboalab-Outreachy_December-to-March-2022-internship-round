import { TestBed } from '@angular/core/testing';

import { BannerHelperService } from './banner-helper.service';

describe('BannerHelperService', () => {
  let service: BannerHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
