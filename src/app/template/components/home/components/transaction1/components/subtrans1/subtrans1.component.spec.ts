import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtrans1Component } from './subtrans1.component';

describe('Subtrans1Component', () => {
  let component: Subtrans1Component;
  let fixture: ComponentFixture<Subtrans1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subtrans1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subtrans1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
