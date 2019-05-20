import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsDetailsComponent } from './instruments-details.component';

describe('InstrumentsDetailsComponent', () => {
  let component: InstrumentsDetailsComponent;
  let fixture: ComponentFixture<InstrumentsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
