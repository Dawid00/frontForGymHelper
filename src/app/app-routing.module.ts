import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { authGuard } from './auth.guard';
import { CreateTrainingComponent } from './create-training/create-training.component';
import { ExerciseEditionComponent } from './exercise-edition/exercise-edition.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingEditionComponent } from './training-edition/training-edition.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'trainings', component: TrainingsListComponent ,canActivate: [authGuard] },
  { path: 'trainings/:id', component: TrainingDetailsComponent, canActivate: [authGuard] },
  { path: 'training/creation', component: CreateTrainingComponent ,canActivate: [authGuard] },
  { path: 'training/edition/:id', component: TrainingEditionComponent, canActivate: [authGuard] },
  { path: 'exercise/edition/:id', component: ExerciseEditionComponent, canActivate: [authGuard] },
  { path: 'auth/login', component: UserAuthComponent },
  { path: 'user', component: UserDetailComponent, canActivate: [authGuard], },
  { path: 'home', component: MenuDashboardComponent, canActivate: [authGuard], },
   { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
