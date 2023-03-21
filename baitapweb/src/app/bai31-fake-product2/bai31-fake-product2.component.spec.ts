import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai31FakeProduct2Component } from './bai31-fake-product2.component';

describe('Bai31FakeProduct2Component', () => {
  let component: Bai31FakeProduct2Component;
  let fixture: ComponentFixture<Bai31FakeProduct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai31FakeProduct2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai31FakeProduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
