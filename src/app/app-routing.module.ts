import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { ViewSubjectComponent } from './components/view-subject/view-subject.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard], // Protecting the route
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthGuard], // Protecting the route
  },
  {
    path: 'all-user',
    component: AllUserComponent,
    canActivate: [AuthGuard], // Protecting the route
  },
  {
    path: 'view-user/:username',
    component: UserProfileComponent,
    canActivate: [AuthGuard], // Protecting the route
  },
  {
    path: 'all-subjects',
    component: AllSubjectComponent,
    canActivate: [AuthGuard], // Protecting the route
  },
  {
    path: 'view-subject/:id',
    component: ViewSubjectComponent,
    canActivate: [AuthGuard], // Protecting the route
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate: [AuthGuard], // Protecting the route
  },
  {
    path: 'all-students',
    component: AllStudentComponent,
    canActivate: [AuthGuard], // Protecting the route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
