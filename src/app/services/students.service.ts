import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './common/data.service';
import { Http } from '@angular/http';
import { Constants } from '../data/common/constants';
import { Student } from 'src/app/data/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends DataService<Student> {

  constructor(http: HttpClient) {
    super(http, Constants.API_ENDPOINT + 'student');
  }
}
