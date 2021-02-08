import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSeriesContainerComponent } from './number-series-container.component';

describe('NumberSeriesContainerComponent', () => {
  let component: NumberSeriesContainerComponent;
  let fixture: ComponentFixture<NumberSeriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberSeriesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSeriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
