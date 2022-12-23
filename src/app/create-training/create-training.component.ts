import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Exercise } from '../exercise';
import { TrainingService } from '../training.service';
import { TrainingStatus } from '../trainingStatus';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ExerciseService } from '../exercise.service';
import { delay, lastValueFrom } from 'rxjs';
@Component({
  selector: 'create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent implements OnInit {


  ngOnInit(): void {
  }
  exercises : Exercise[] = [];
  constructor(private trainingService: TrainingService, private exerciseService: ExerciseService, private modalService: NgbModal) {}
  trainingForm = new FormGroup({
    description: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
  });
  trainingStatusArray: string[] = Object.keys(TrainingStatus).filter((item) => {
    return isNaN(Number(item));
  });

  @Output() newExerciseEvent = new EventEmitter<Exercise>();

  addExercise(ex: Exercise) {
    this.exercises.push(ex);
  }
  deleteExById(id: number){
    this.exercises = this.exercises.filter(ex => ex.id != id)
  }

  open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      }, (reason) => {
      });
    }

    clearExercises() {
      this.exercises = [];
    }
  clearForm() {
    this.trainingForm.reset();
  }
  validateSubmit(){
    return this.trainingForm.valid && this.exercises.length > 0;
  }
   async submitTraining(){
    let formValue = this.trainingForm.value;
    let preparedTraining = {
      date: formValue.date!,
      description: formValue.description!,
      status: formValue.status!,
      exercises : []
    }
     const trainingId = await lastValueFrom(this.trainingService.createTraining(preparedTraining))
     this.exercises.forEach(ex => {
        this.exerciseService.createExercise(ex,trainingId)
        .subscribe(res =>{
          this.clearForm();
          this.clearExercises();
          this.showCreatedInfo();
        });
})
 }

 async showCreatedInfo(){
  this.createdInfo = true;
  await new Promise(resolve => setTimeout(resolve, 3000));
  this.createdInfo = false;
 }
 createdInfo = false;


 
}

