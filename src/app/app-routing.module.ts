import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './components/student/list/students.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayErrorComponent } from './components/display-error/display-error.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'error/:msg',
    component: DisplayErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
