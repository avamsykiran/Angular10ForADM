import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseService } from './service/course.service';

@Pipe({
  name: 'courseName'
})
export class CourseNamePipe implements PipeTransform {

  constructor(private courseService:CourseService){

  }

  transform(value: number): Observable<String> {
      
    return this.courseService.getById(value).pipe(
      map(c => c.title)
    );
      
  }

}
