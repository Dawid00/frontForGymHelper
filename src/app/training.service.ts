import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Training } from './training';
import { TrainingRequestBody } from './trainingRequestBody';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  updateTrainingById(trainingRequestBody: Training) {
    return this.http.put<any>(`${this.trainingUrl}/${trainingRequestBody.id}`, trainingRequestBody);
  }
  trainingUrl='http://localhost:8079/api/trainings';
  constructor(private http: HttpClient) { }
    createTraining(trainingRequestBody: TrainingRequestBody) {
      return this.http.post<number>(`${this.trainingUrl}`, trainingRequestBody);
    }
    deleteTraining(id: number) {
      return this.http.delete<Training>(`${this.trainingUrl}/${id}`);

    }
    getTrainingById(id: number) {
      return this.http.get<Training>(`${this.trainingUrl}/${id}`);
      
    }
    getTrainings() {
      return this.http.get<Training[]>(this.trainingUrl);
    }
  
}
