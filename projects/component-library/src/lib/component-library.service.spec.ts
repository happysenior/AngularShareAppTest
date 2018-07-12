import { TestBed, inject } from '@angular/core/testing';

import { ComponentLibraryService } from './component-library.service';

describe('ComponentLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentLibraryService]
    });
  });

  it('should be created', inject([ComponentLibraryService], (service: ComponentLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
