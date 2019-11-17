import { AppErrorHandler } from './error/handler/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './services/students.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AddressComponent } from './components/address/address.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { StudentDeleteComponent } from './components/student/delete/student-delete.component';
import { StudentsComponent } from './components/student/list/students.component';
import { StudentCreateComponent } from './components/student/create/student-create.component';
import { StudentComponent } from './components/student/edit/student.component';
import { DisplayErrorComponent } from './components/display-error/display-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddressComponent,
    ToolbarComponent,
    NavbarComponent,
    HomeComponent,
    StudentsComponent,
    StudentDeleteComponent,
    StudentCreateComponent,
    StudentComponent,
    DisplayErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  entryComponents: [
    StudentComponent,
    StudentDeleteComponent,
    StudentCreateComponent
  ],
  providers: [
    StudentsService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
bootstrap: [AppComponent]
})
export class AppModule { }
