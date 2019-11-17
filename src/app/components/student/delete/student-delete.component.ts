import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.scss']
})
export class StudentDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<StudentDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentsService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.studentService.delete(this.data.id);
  }
}
