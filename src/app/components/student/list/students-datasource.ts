import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of as observableOf, merge, Subscription } from 'rxjs';
import { Student } from 'src/app/data/student';
import { StudentsService } from 'src/app/services/students.service';
import { Inject } from '@angular/core';


/**
 * Data source for the Students view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class StudentsDataSource extends DataSource<Student> {
  paginator: MatPaginator;
  sort: MatSort;
  data: Student[] = [];

  constructor(private studentService: StudentsService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Student[]> {
    const dataMutations = [
      // this.studentService.getAll().pipe(switchMap(data => {this.data = data; return observableOf(this.data); })),
      this.studentService.getAll().pipe(switchMap(data => this.data = data)),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(
      map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
  }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Student[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Student[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
        case 'secondName': return compare(a.secondName, b.secondName, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
