import { Component, OnInit, inject } from '@angular/core';
import { PersonService } from '../services/person.service';
import { RouterModule } from '@angular/router';
import { Person } from '../person-model/person.interfase';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export default class PersonListComponent implements OnInit {
  private personService = inject(PersonService);

  persons: Person [] = [];

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(){
    this.personService.list()
      .subscribe(persons => {
        this.persons = persons;
      });
  }

  deletePerson(person: Person){
    this.personService.delete(person.id)
      .subscribe(()=> {
        this.loadAll();
      });
  }
}
