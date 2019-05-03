import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dota2ListComponent } from './dota2-list.component';

describe('Dota2ListComponent', () => {
  let component: Dota2ListComponent;
  let fixture: ComponentFixture<Dota2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Dota2ListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dota2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
