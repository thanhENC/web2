import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai47PostManyBooksComponent } from './bai47-post-many-books.component';

describe('Bai47PostManyBooksComponent', () => {
  let component: Bai47PostManyBooksComponent;
  let fixture: ComponentFixture<Bai47PostManyBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai47PostManyBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai47PostManyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
