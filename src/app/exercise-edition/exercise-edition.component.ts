import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { ExerciseType } from '../exerciseType';

@Component({
  selector: 'app-exercise-edition',
  templateUrl: './exercise-edition.component.html',
  styleUrls: ['./exercise-edition.component.css']
})
export class ExerciseEditionComponent implements OnInit {

  @Input()
  id: number =0;
  @Input()
  exercise! : Exercise;

  ngOnInit(): void {
   this.exerciseForm.get('sets')?.setValue(this.exercise.sets);
   this.exerciseForm.get('reps')?.setValue(this.exercise.reps);
   this.exerciseForm.get('type')?.setValue(this.exercise.type);
   this.exerciseForm.get('weight')?.setValue(this.exercise.weight);
}
   
constructor(private routers: Router, private route: ActivatedRoute, private exerciseService: ExerciseService ) {}
  exerciseForm = new FormGroup({
    type: new FormControl("", Validators.required),
    weight: new FormControl(0, [Validators.required,Validators.min(0)]),
    sets: new FormControl(0, [Validators.required,Validators.min(1)]),
    reps: new FormControl(0, [Validators.required,Validators.min(1)]),
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
      sets: this.exerciseForm.get('sets')?.value ? this.exerciseForm.get('sets')?.value: 0,
    }
    var newEx = new Exercise(
        this.id,
        exerciseToAdd.type!,
        exerciseToAdd.weight!,
        exerciseToAdd.reps!,
        exerciseToAdd.sets!
      );
      this.addNewExercise(newEx);
      this.clearForm();

      return newEx;
    }
   
  add() {
    // this.exerciseService.createExercise();
  }
  clearForm() {
    this.exerciseForm.reset();
  }
}
