import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai61FashionDeleteComponent } from './bai61-fashion-delete.component';

describe('Bai61FashionDeleteComponent', () => {
  let component: Bai61FashionDeleteComponent;
  let fixture: ComponentFixture<Bai61FashionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai61FashionDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai61FashionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
