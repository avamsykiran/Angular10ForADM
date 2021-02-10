import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesApiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.coursesApiUrl = `${environment.apiUrl}/courses`;
  }

  getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesApiUrl)
      .pipe(
        catchError(err => {
          console.log(err);
          throw "Sorry, Unable to process your request! Retry later! ";
        })
      );
  }

  getById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesApiUrl}/${id}`)
      .pipe(
        catchError(err => {
          console.log(err);
          throw "Sorry, Unable to process your request! Retry later! ";
        })
      );
  }

  add(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.coursesApiUrl, course)
      .pipe(
        catchError(err => {
          console.log(err);
          throw "Sorry, Unable to process your request! Retry later! ";
        })
      );
  }
}
