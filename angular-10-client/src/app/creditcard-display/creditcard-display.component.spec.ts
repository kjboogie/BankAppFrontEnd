import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardDisplayComponent } from './creditcard-display.component';

describe('CreditcardDisplayComponent', () => {
  let component: CreditcardDisplayComponent;
  let fixture: ComponentFixture<CreditcardDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
