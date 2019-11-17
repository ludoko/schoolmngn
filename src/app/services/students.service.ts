
import { DataService } from './common/data.service';
import { Constants } from '../data/common/constants';
import { Student } from 'src/app/data/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentsService extends DataService<Student> {

  constructor(http: HttpClient) {
    super(http, Constants.API_ENDPOINT + 'student');
  }
}
