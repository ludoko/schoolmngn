import { StudentsService } from './../../services/students.service';
import { Student } from './../../data/student';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input('student') student: Student;

  constructor(private service: StudentsService) { }

  ngOnInit() {
  }

  update(student: Student) {
    this.service.update(student)
      .subscribe(updatedItem => {
        console.log(updatedItem);
      });
  }

  deletePost(student: Student) {
    this.service.delete(student.id);
  }
}
