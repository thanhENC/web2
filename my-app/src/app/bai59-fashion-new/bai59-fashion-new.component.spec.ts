import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai59FashionNewComponent } from './bai59-fashion-new.component';

describe('Bai59FashionNewComponent', () => {
  let component: Bai59FashionNewComponent;
  let fixture: ComponentFixture<Bai59FashionNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai59FashionNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai59FashionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
