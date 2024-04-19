import { TestBed } from '@angular/core/testing';

import { PendingBlogService } from './pending-blog.service';

describe('PendingBlogService', () => {
  let service: PendingBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
