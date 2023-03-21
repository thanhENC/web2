import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai32CoindeskAPIComponent } from './bai32-coindesk-api.component';

describe('Bai32CoindeskAPIComponent', () => {
  let component: Bai32CoindeskAPIComponent;
  let fixture: ComponentFixture<Bai32CoindeskAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai32CoindeskAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai32CoindeskAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
