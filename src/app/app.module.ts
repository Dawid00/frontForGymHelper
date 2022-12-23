import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTrainingComponent } from './create-training/create-training.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingEditionComponent } from './training-edition/training-edition.component';
import { ExerciseEditionComponent } from './exercise-edition/exercise-edition.component';
import { AuthInterceptor, authInterceptorProviders } from './auth.interceptor';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateTrainingComponent,
    CreateExerciseComponent,
    MenuDashboardComponent,
    UserAuthComponent,
    TrainingsListComponent,
    ExerciseDetailsComponent,
    TrainingDetailsComponent,
    TrainingEditionComponent,
    ExerciseEditionComponent,
    UserDetailComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
