import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoryconfigComponent } from './territoryconfig.component';

describe('TerritoryconfigComponent', () => {
  let component: TerritoryconfigComponent;
  let fixture: ComponentFixture<TerritoryconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritoryconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoryconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
