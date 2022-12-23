import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseEditionComponent } from './exercise-edition.component';

describe('ExerciseEditionComponent', () => {
  let component: ExerciseEditionComponent;
  let fixture: ComponentFixture<ExerciseEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
