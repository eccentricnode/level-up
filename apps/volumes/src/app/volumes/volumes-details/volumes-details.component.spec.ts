import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumesDetailsComponent } from './volumes-details.component';

describe('VolumesDetailsComponent', () => {
  let component: VolumesDetailsComponent;
  let fixture: ComponentFixture<VolumesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
