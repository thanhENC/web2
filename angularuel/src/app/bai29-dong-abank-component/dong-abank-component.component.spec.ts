import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongABankComponentComponent } from './dong-abank-component.component';

describe('DongABankComponentComponent', () => {
  let component: DongABankComponentComponent;
  let fixture: ComponentFixture<DongABankComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DongABankComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DongABankComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
