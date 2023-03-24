import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai34PredictGenderComponent } from './bai34-predict-gender.component';

describe('Bai34PredictGenderComponent', () => {
  let component: Bai34PredictGenderComponent;
  let fixture: ComponentFixture<Bai34PredictGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai34PredictGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai34PredictGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
