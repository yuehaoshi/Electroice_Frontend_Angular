import { TestBed } from '@angular/core/testing';

import { ElectroiceFormService } from './electroice-form.service';

describe('ElectroiceFormService', () => {
  let service: ElectroiceFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectroiceFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
