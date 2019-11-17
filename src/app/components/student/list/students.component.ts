import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentsDataSource } from './students-datasource';
import { Student } from 'src/app/data/student';
import { StudentsService } from 'src/app/services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentComponent } from '../edit/student.component';
import { StudentDeleteComponent } from '../delete/student-delete.component';
import { StudentCreateComponent } from '../create/student-create.component';
import { DialogType } from 'src/app/data/common/dialog-type';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<Student>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['firstName', 'secondName', 'streetName', 'actions'];
  dataSource: StudentsDataSource;
  id: number;
  index: number;

  constructor(
    private studentService: StudentsService,
    private dialog: MatDialog) {

    this.dataSource = new StudentsDataSource(studentService);
  }

  ngOnInit() {
    // this.dataSource = new StudentsDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  edit(i: number, id: number) {
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    this.id = id;
    const dialogRef = this.dialog.open(StudentComponent, {
      data: {
        id,
        mode: DialogType.Update},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // // When using an edit things are little different, firstly we find record inside DataService by id
        // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // // Then you update that record using data from dialogData (values you enetered)
        // this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  delete(i: number, id: number, firstName: string, secondName: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(StudentDeleteComponent, {
      data: {id, firstName, secondName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // // for delete we use splice in order to remove single object from DataService
        // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }

  create() {
    const dialogRef = this.dialog.open(StudentComponent, {
      data: {
         mode: DialogType.Create},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // // After dialog is closed we're doing frontend updates
        // // For add we're just pushing a new row inside DataService
        // this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }

  private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }
}
