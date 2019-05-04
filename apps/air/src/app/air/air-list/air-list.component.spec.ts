import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirListComponent } from './air-list.component';

describe('AirListComponent', () => {
  let component: AirListComponent;
  let fixture: ComponentFixture<AirListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
