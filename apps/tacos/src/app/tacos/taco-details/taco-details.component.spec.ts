import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacoDetailsComponent } from './taco-details.component';

describe('TacoDetailsComponent', () => {
  let component: TacoDetailsComponent;
  let fixture: ComponentFixture<TacoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
