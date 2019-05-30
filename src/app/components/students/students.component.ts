import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/data/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private service: StudentsService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        students => {this.students = students;
        console.log(students); }
      );
  }
}
