import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Student } from '../../../data/student';
import { StudentsService } from '../../../services/students.service';
import { AddressComponent } from '../../address/address.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogType } from 'src/app/data/common/dialog-type';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  studentForm: FormGroup;
  student: Student;
  mode: DialogType;

  constructor(
    public dialogRef: MatDialogRef<StudentComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private service: StudentsService,
    private fb: FormBuilder) {

    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      address: AddressComponent.createForm(this.fb)
    });

    if (data) {
      this.mode = data.mode;
      if ( data.id != null) {
        service.find(data.id).subscribe(r => {
          this.student = r;
          this.studentForm.patchValue({
            firstName: this.student.firstName,
            secondName: this.student.secondName,
            address: AddressComponent.setValue(this.student.address)
          });
          console.log(this.student);
        });
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  update() {
    this.student  = Object.assign({}, this.student, this.studentForm.value);
    this.service.update(this.student)
      .subscribe(updatedItem => {
      });
  }

  create() {
    this.student  = Object.assign({}, this.studentForm.value);
    this.service.create(this.student)
      .subscribe(updatedItem => {
      });
  }

  delete() {
     this.service.delete(this.student.id)
      .subscribe(updatedItem => {
      });
  }

  onSubmit() {
    console.log(`Mode: ${this.mode}`);
    switch (this.mode) {
      case DialogType.Update:
        this.update();
        break;
      case DialogType.Create:
          this.create();
          break;
      case DialogType.Delete:
          this.delete();
          break;
      }
    console.log(`${this.student}`);
  }
}
