import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Person } from '../person-model/person.interfase';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private http = inject(HttpClient);

  list(){
    return this.http.get<Person[]>('http://localhost:8080/api/person');
  }

  get(id: number){
    return this.http.get<Person>(`http://localhost:8080/api/person/${id}`);
  }

  create(person: Person){
    return this.http.post<Person>('http://localhost:8080/api/person/create', person);
  }

  update(id: number, person: Person){
    return this.http.put<Person>(`http://localhost:8080/api/person/${id}`, person);
  }

  delete(id: number){
    return this.http.delete<void>(`http://localhost:8080/api/person/${id}`);
  }

}
