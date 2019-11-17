import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Entity } from 'src/app/data/entity';
import { AppError } from 'src/app/error/data/app-error';
import { BadInputError } from 'src/app/error/data/bad-input-error';
import { NotFoundError } from 'src/app/error/data/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService<T extends Entity> {

  static readonly LIST_ALL = '/list-all';
  static readonly FIND = '/find';
  static readonly PAGE = '/page';
  static readonly CREATE = '/create';
  static readonly UPDATE = '/update';
  static readonly DELETE = '/delete';

  constructor(private http: HttpClient, private url: string) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url + DataService.LIST_ALL).pipe(
      catchError(this.handleError)
    );
  }

  find(id: number): Observable<T> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<T>(this.url + DataService.FIND, { params }).pipe(
      catchError(this.handleError)
    );
  }

  create(resource: T): Observable<T> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<T>(this.url + DataService.CREATE,
      JSON.stringify(resource),
      { headers })
      .pipe(
        catchError(this.handleError));
  }

  update(resource: T): Observable<T> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<T>(this.url + DataService.UPDATE + '/' + resource.id,
      JSON.stringify(resource),
      { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: number) {
    return this.http.delete(this.url + DataService.DELETE + '/' + id)
      // .toPromise(); // Use Promise instead of Observable.
      // In case of Promise you should not use .subscribe
      // in posts.component.ts -> deletePost

      .pipe(
        // map(response => response.json()),
        catchError(this.handleError));
  }

  getPage(filter = '',
          sortOrder = 'asc',
          pageNumber = 0,
          pageSize = 10): Observable<T[]> {

    return this.http.get<T[]>(this.url + DataService.PAGE, {
      params: new HttpParams()
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    } else if (error.status === 400) {
      return throwError(new BadInputError(error.error));
    }
    return throwError(new AppError(error));
  }
}
