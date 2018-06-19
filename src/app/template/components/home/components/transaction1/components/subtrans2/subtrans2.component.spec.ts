import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtrans2Component } from './subtrans2.component';

describe('Subtrans2Component', () => {
  let component: Subtrans2Component;
  let fixture: ComponentFixture<Subtrans2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subtrans2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subtrans2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
