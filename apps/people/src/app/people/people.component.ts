import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { PeopleService, PeopleFacade, Person } from '@level/core-data';

@Component({
  selector: 'level-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  form: FormGroup
  people$: Observable<Person[]> = this.peopleFacade.allPeople$;
  selectedPerson$: Observable<Person> = this.peopleFacade.selectedPeople$;

  constructor(
    private peopleService: PeopleService,
    private peopleFacade: PeopleFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.peopleFacade.loadPeople();
    this.initForm();
    this.resetPerson();
  }

  selectPerson(person) {
    this.peopleFacade.selectPerson(person);
  }

  resetPerson() {
    this.form.reset();
    this.selectPerson({id: null});
  }

  initForm() { 
    this.form = this.formBuilder.group({
      id: null,
      name: { value: '', disabled: true },
      mass: { value: '', disabled: true },
      height: { value: '', disabled: true },
      gender: { value: '', disabled: true },
    })
  }
}
