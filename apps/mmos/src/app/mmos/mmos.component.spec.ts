import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmosComponent } from './mmos.component';

describe('MmosComponent', () => {
  let component: MmosComponent;
  let fixture: ComponentFixture<MmosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MmosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
