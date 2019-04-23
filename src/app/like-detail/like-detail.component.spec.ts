import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDetailComponent } from './like-detail.component';

describe('LikeDetailComponent', () => {
  let component: LikeDetailComponent;
  let fixture: ComponentFixture<LikeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
