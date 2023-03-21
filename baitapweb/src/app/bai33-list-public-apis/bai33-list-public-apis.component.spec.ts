import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai33ListPublicAPIsComponent } from './bai33-list-public-apis.component';

describe('Bai33ListPublicAPIsComponent', () => {
  let component: Bai33ListPublicAPIsComponent;
  let fixture: ComponentFixture<Bai33ListPublicAPIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai33ListPublicAPIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai33ListPublicAPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
