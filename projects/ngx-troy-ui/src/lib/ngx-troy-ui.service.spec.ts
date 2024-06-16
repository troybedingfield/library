import { TestBed } from '@angular/core/testing';

import { NgxTroyUiService } from './ngx-troy-ui.service';

describe('NgxTroyUiService', () => {
  let service: NgxTroyUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTroyUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
