import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionconfigComponent } from './transactionconfig.component';

describe('TransactionconfigComponent', () => {
  let component: TransactionconfigComponent;
  let fixture: ComponentFixture<TransactionconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
