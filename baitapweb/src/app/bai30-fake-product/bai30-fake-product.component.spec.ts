import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai30FakeProductComponent } from './bai30-fake-product.component';

describe('Bai30FakeProductComponent', () => {
  let component: Bai30FakeProductComponent;
  let fixture: ComponentFixture<Bai30FakeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai30FakeProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai30FakeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
