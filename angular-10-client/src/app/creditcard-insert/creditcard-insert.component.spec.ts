import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardInsertComponent } from './creditcard-insert.component';

describe('CreditcardInsertComponent', () => {
  let component: CreditcardInsertComponent;
  let fixture: ComponentFixture<CreditcardInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
