import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodconfigComponent } from './periodconfig.component';

describe('PeriodconfigComponent', () => {
  let component: PeriodconfigComponent;
  let fixture: ComponentFixture<PeriodconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
