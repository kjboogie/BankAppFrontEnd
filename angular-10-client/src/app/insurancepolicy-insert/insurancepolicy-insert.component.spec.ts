import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancepolicyInsertComponent } from './insurancepolicy-insert.component';

describe('InsurancepolicyInsertComponent', () => {
  let component: InsurancepolicyInsertComponent;
  let fixture: ComponentFixture<InsurancepolicyInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancepolicyInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancepolicyInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
