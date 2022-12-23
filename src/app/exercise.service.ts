import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustAll } from 'rxjs';
import { Exercise } from './exercise';
import { Training } from './training';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  
  exerciseUrl='http://localhost:8079/api/exercises';
  exerciseWithTrainingsUrl='http://localhost:8079/api/trainings';
  constructor(private http: HttpClient) { }
  
  
  getExercisesByTrainingId(id: any) {
    return this.http.get<Exercise[]>(`${this.exerciseWithTrainingsUrl}/${id}/exercises`);
  }
  deleteExercise(id: number) {
      return this.http.delete<Exercise>(`${this.exerciseUrl}/${id}`);
    }
    getExerciseById(id: number) {
      return this.http.get<Exercise>(`${this.exerciseUrl}/${id}`);
    }
  
  
  createExercise(exerciseRequestBody: Exercise, trainingId: number) {
    let ex = {
      reps: exerciseRequestBody.reps,
      sets: exerciseRequestBody.sets,
      weight: exerciseRequestBody.weight,
      type: exerciseRequestBody.type
    }
     return this.http.post<any>(`${this.exerciseWithTrainingsUrl}/${trainingId}/exercises`, ex);
  }
  
  updateExercise(toUpdate: Exercise) {
    console.log(toUpdate.id)
    return this.http.put<any>(`${this.exerciseUrl}/${toUpdate.id}`, toUpdate);
  }
}

