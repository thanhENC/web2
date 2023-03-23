import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai58FashionDetailComponent } from './bai58-fashion-detail.component';

describe('Bai58FashionDetailComponent', () => {
  let component: Bai58FashionDetailComponent;
  let fixture: ComponentFixture<Bai58FashionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai58FashionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai58FashionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
