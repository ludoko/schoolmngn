import { AppErrorHandler } from './error/handler/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/student/student.component';
import { StudentsService } from './services/students.service';
import { StudentCreateComponent } from './components/student-create/student-create.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudentCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    StudentsService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
bootstrap: [AppComponent]
})
export class AppModule { }
