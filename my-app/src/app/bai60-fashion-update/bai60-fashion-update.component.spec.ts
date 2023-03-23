import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai60FashionUpdateComponent } from './bai60-fashion-update.component';

describe('Bai60FashionUpdateComponent', () => {
  let component: Bai60FashionUpdateComponent;
  let fixture: ComponentFixture<Bai60FashionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai60FashionUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai60FashionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
