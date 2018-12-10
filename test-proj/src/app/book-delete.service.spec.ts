import { TestBed } from '@angular/core/testing';

import { BookDeleteService } from './book-delete.service';

describe('BookDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookDeleteService = TestBed.get(BookDeleteService);
    expect(service).toBeTruthy();
  });
});
