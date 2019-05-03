import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dota2DetailsComponent } from './dota2-details.component';

describe('Dota2DetailsComponent', () => {
  let component: Dota2DetailsComponent;
  let fixture: ComponentFixture<Dota2DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Dota2DetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dota2DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
