import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtrans3Component } from './subtrans3.component';

describe('Subtrans3Component', () => {
  let component: Subtrans3Component;
  let fixture: ComponentFixture<Subtrans3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subtrans3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subtrans3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
