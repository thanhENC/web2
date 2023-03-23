import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai57FashionComponent } from './bai57-fashion.component';

describe('Bai57FashionComponent', () => {
  let component: Bai57FashionComponent;
  let fixture: ComponentFixture<Bai57FashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai57FashionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai57FashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
