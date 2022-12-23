import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Exercise } from '../exercise';
import { ExerciseType } from '../exerciseType';
import { ExerciseService } from '../exercise.service';
@Component({
  selector: 'create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private exerciseService: ExerciseService) { }
  exerciseForm = new FormGroup({
    type: new FormControl('', Validators.required),
    weight: new FormControl(null, [Validators.required,Validators.min(0)]),
    series: new FormControl(null, [Validators.required,Validators.min(1)]),
    reps: new FormControl(null, [Validators.required,Validators.min(1)]),
  });
  exerciseTypes: string[] = Object.keys(ExerciseType).filter((item) => {
    return isNaN(Number(item));
  });

  @Output() newExerciseEvent = new EventEmitter<Exercise>();

  addNewExercise(ex: Exercise) {
    this.newExerciseEvent.emit(ex);
  }

  submitExercise(): Exercise {
    var exerciseToAdd = {
      type: this.exerciseForm.get('type')?.value ? this.exerciseForm.get('type')?.value : "",
      weight: this.exerciseForm.get('weight')?.value ? this.exerciseForm.get('weight')?.value : 0,
      reps: this.exerciseForm.get('reps')?.value ? this.exerciseForm.get('reps')?.value : 0,
      series: this.exerciseForm.get('series')?.value ? this.exerciseForm.get('series')?.value: 0,
    }
    var newEx = new Exercise(
      (Math.random() * 1000),
        exerciseToAdd.type!,
        exerciseToAdd.weight!,
        exerciseToAdd.reps!,
        exerciseToAdd.series!
      );
      this.addNewExercise(newEx);
      this.clearForm();
      return newEx;
    }
   
  add() {

    //this.exerciseService.createExercise();
  }
  clearForm() {
    this.exerciseForm.reset();
  }
}
