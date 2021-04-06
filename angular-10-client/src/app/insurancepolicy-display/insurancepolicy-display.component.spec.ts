import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancepolicyDisplayComponent } from './insurancepolicy-display.component';

describe('InsurancepolicyDisplayComponent', () => {
  let component: InsurancepolicyDisplayComponent;
  let fixture: ComponentFixture<InsurancepolicyDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancepolicyDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancepolicyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
