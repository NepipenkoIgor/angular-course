/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InputService } from './input.service';

describe('Service: Input', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputService]
    });
  });

  it('should ...', inject([InputService], (service: InputService) => {
    expect(service).toBeTruthy();
  }));
});
