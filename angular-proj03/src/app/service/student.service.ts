import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsApiUrl:string; 

  constructor(private httpClient : HttpClient) { 
    this.studentsApiUrl=`${environment.apiUrl}/students`;
  }

  getById(id:number):Observable<Student>{
    return this.httpClient.get<Student>(`${this.studentsApiUrl}/${id}`)
    .pipe(
      catchError(err =>{
        console.log(err);
        throw 'No such student found';
      })
    );
  }

  add(student:Student):Observable<Student>{
    return this.httpClient.post<Student>(this.studentsApiUrl,student)
    .pipe(
      catchError(err =>{
        console.log(err);
        throw 'Could not serve the request, please try later';
      })
    );
  }

  modify(student:Student,id:number):Observable<Student>{
    return this.httpClient.put<Student>(`${this.studentsApiUrl}/${id}`,student)
    .pipe(
      catchError(err =>{
        console.log(err);
        throw 'Could not serve the request, please try later';
      })
    );
  }
}