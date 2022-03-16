import { TestBed } from '@angular/core/testing';

import { CarteraService } from './cartera.service';

describe('CarteraService', () => {
  let service: CarteraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
