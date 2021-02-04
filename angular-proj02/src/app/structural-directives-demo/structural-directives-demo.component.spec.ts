import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesDemoComponent } from './structural-directives-demo.component';

describe('StructuralDirectivesDemoComponent', () => {
  let component: StructuralDirectivesDemoComponent;
  let fixture: ComponentFixture<StructuralDirectivesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectivesDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectivesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
