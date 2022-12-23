import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingEditionComponent } from './training-edition.component';

describe('TrainingEditionComponent', () => {
  let component: TrainingEditionComponent;
  let fixture: ComponentFixture<TrainingEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
