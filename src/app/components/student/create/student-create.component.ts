import { Student } from 'src/app/data/student';
import { StudentsService } from 'src/app/services/students.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsernameValidators } from 'src/app/validators/username.validator';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  form: any;

  constructor(private service: StudentsService, fb: FormBuilder ) {
    this.form = fb.group({
      student: fb.group({
        firstName: ['',
          [Validators.required,
          UsernameValidators.cannotContainSpace]
        ],
        secondName: ['',
          Validators.required,
          UsernameValidators.cannotContainSpace]
      })
    });
  }

  ngOnInit() {
  }

  onSave() {
    this.service.create(this.form.student);
  }
}
