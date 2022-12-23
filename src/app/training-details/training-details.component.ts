import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private trainingService: TrainingService, private exerciseService: ExerciseService) { }
  exercises : Exercise[] = [];

  training?: Training;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.trainingService.getTrainingById(params['id'])
      .subscribe(res => {
        this.training = res;
      });
       this.exerciseService.getExercisesByTrainingId(params['id']).subscribe(res => {
         this.exercises = res;
       });;
    });
  }

  getTrainingById(id: number){
    this.trainingService.getTrainingById(id).subscribe(res =>{
       this.training = res;
     })
  }
}
