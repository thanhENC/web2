import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai35UsDataComponent } from './bai35-us-data.component';

describe('Bai35UsDataComponent', () => {
  let component: Bai35UsDataComponent;
  let fixture: ComponentFixture<Bai35UsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai35UsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai35UsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
