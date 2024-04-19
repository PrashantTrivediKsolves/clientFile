import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPendingBlogsComponent } from './all-pending-blogs.component';

describe('AllPendingBlogsComponent', () => {
  let component: AllPendingBlogsComponent;
  let fixture: ComponentFixture<AllPendingBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPendingBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPendingBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
