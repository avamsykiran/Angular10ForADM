import { MylowercasePipe } from './mylowercase.pipe';

describe('MylowercasePipe', () => {

  let pipe:MylowercasePipe = null;

  beforeEach(()=>{
    pipe = new MylowercasePipe();
  });

  it('create an instance', () => {    
    expect(pipe).toBeTruthy();
  });

  it('should transform work as expected', () => {
    let input = "HELLO";
    let actual = pipe.transform(input);
    expect(actual).toBe("hello"); 
  });
});
