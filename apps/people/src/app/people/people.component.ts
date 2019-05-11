import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PeopleService } from '@level/core-data';

@Component({
  selector: 'level-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  form: FormGroup
  people$;
  selectedPerson;

  constructor(
    private peopleService: PeopleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getPeople();
    this.initForm();
    this.resetPerson();
  }

  getPeople() {
    this.people$ = this.peopleService.all();
  }

  selectPerson(person) {
    this.selectedPerson = person;
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
