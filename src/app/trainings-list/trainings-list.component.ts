import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { TrainingService } from '../training.service';
import { TrainingDetails } from '../trainingDetails';

@Component({
  selector: 'app-trainings-list',
  templateUrl: './trainings-list.component.html',
  styleUrls: ['./trainings-list.component.css']
})
export class TrainingsListComponent implements OnInit {

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.getTrainings();
  }

  trainings:Training[] = [];
  chosenTraining?: TrainingDetails;
  getTrainings(){
    this.trainingService.getTrainings().subscribe(res => {
      this.trainings = res;

    });
  }
  deleteById(id:number){
    this.trainingService.deleteTraining(id).subscribe(() => this.trainings = this.trainings.filter(tr => tr.id != id));
  }
}
