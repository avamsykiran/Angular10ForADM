import { CourseNamePipe } from './course-name.pipe';

describe('CourseNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CourseNamePipe();
    expect(pipe).toBeTruthy();
  });
});
