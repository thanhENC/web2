import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai45BookDetailComponent } from './bai45-book-detail.component';

describe('Bai45BookDetailComponent', () => {
  let component: Bai45BookDetailComponent;
  let fixture: ComponentFixture<Bai45BookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai45BookDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai45BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
