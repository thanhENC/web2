import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai29ExternalApiNganHangDongAComponent } from './bai29-external-api-ngan-hang-dong-a.component';

describe('Bai29ExternalApiNganHangDongAComponent', () => {
  let component: Bai29ExternalApiNganHangDongAComponent;
  let fixture: ComponentFixture<Bai29ExternalApiNganHangDongAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai29ExternalApiNganHangDongAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai29ExternalApiNganHangDongAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
