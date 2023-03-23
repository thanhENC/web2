import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai47BookNewComponent } from './bai47-book-new.component';

describe('Bai47BookNewComponent', () => {
  let component: Bai47BookNewComponent;
  let fixture: ComponentFixture<Bai47BookNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai47BookNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai47BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
