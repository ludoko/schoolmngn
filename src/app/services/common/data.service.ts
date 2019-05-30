import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private url: string) { }

  getAll(): Observable<T[]> {
    return this.http.get(this.url).pipe<T[]>(
      map(response => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  create(resource: T) {
  return throwError(new AppError());
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      // map(response => response.json()),
      catchError(this.handleError));
  }

  update(resource: T) {
  return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(
      // map(response => response.json()),
      catchError(this.handleError)
    );
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      // .toPromise(); // Use Promise instead of Observable.
      // In case of Promise you should not use .subscribe
      // in posts.component.ts -> deletePost

      .pipe(
        // map(response => response.json()),
        catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    } else if (error.status === 400) {
      return throwError(new BadInputError(error.json()));
    }
    return throwError(new AppError(error));
  }
}
