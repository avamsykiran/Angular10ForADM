import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-proj04'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-proj04');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('angular-proj04');

    let btn : HTMLButtonElement = compiled.querySelector('button');
    
    //btn.dispatchEvent(new Event('click'));
    btn.click();
    
    fixture.detectChanges();
    expect(compiled.querySelector('p').textContent).toContain('something else');

  });
});
