import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai36RandomDogImageComponent } from './bai36-random-dog-image.component';

describe('Bai36RandomDogImageComponent', () => {
  let component: Bai36RandomDogImageComponent;
  let fixture: ComponentFixture<Bai36RandomDogImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai36RandomDogImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai36RandomDogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
