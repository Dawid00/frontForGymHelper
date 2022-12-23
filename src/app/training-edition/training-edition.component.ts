import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { TrainingStatus } from '../trainingStatus';

@Component({
  selector: 'app-training-edition',
  templateUrl: './training-edition.component.html',
  styleUrls: ['./training-edition.component.css']
})
export class TrainingEditionComponent implements OnInit {



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.trainingService.getTrainingById(params['id'])
      .subscribe(res => {
        let exercises: Exercise[] = [];
        this.chosenTraining = {
          id: res.id,
        date: res.date,
      description: res.description,
    status: res.status,
  exercises: exercises
  };
  this.trainingForm.get('description')?.setValue(res.description);
  this.trainingForm.get('status')?.setValue(res.status);
  this.trainingForm.get('date')?.setValue(res.date);
});
this.exerciseService.getExercisesByTrainingId(params['id']).subscribe(res => {
  this.exercises = res;
  console.log(res)
});
  })}

  exercises : Exercise[] = [];
  chosenExercise!: Exercise;
  constructor(private route: ActivatedRoute,private routers: Router,private trainingService: TrainingService, private exerciseService: ExerciseService,private modalService: NgbModal) {}
  chosenExerciseId : number = 0; 
  chosenTraining? :Training;
  trainingForm = new FormGroup({
    description: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required),
    date: new FormControl(new Date(), Validators.required),
  });
  trainingStatusArray: string[] = Object.keys(TrainingStatus).filter((item) => {
    return isNaN(Number(item));
  });

  @Output() newExerciseEvent = new EventEmitter<Exercise>();

  addExercise(ex: Exercise) {
    this.exercises = this.exercises.filter(exe => exe.id != ex.id); 
    this.exercises.push(ex);
    this.modalService.dismissAll();
  }
  deleteExById(id: number){
    this.exercises = this.exercises.filter(ex => ex.id != id)
  }
  setEx(ex:Exercise) {
    this.chosenExercise = ex;
    this.chosenExerciseId = ex.id;
  }
  open(content:any, ex: Exercise) {
    this.chosenExercise = ex;
    this.chosenExerciseId = ex.id;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      }, (reason) => {
      });
    }
    open1(content2:any) {
      this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  submitTraining(){
      this.trainingService.updateTrainingById(
        {
          id: this.chosenTraining?.id!,
          date: this.trainingForm.get("date")?.value! ,
          description: this.trainingForm.get("description")?.value! ,
          status: this.trainingForm.get("status")?.value!,
          exercises: []
        }
      ).subscribe();
      this.exercises.forEach(ex => {

        if(!Number.isInteger(ex.id)){
          console.log(ex);
          this.exerciseService.createExercise(ex,this.chosenTraining?.id!).subscribe()
        }else {
          this.exerciseService.updateExercise(ex).subscribe()
        }
      } );
      this.routers.navigateByUrl('/trainings');
  }
}
