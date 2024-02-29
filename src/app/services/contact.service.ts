import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);

  list(){
    return this.http.get('http://localhost:8080/api/person');
  }

  get(id: number){
    return this.http.get('http://localhost:8080/api/person/${id}');
  }

  create(contact: any){
    return this.http.post('http://localhost:8080/api/person/create', contact);
  }

  update(id: number, contact: any){
    return this.http.put('http://localhost:8080/api/person/${id}', contact);
  }

  delete(id: number){
    return this.http.delete('http://localhost:8080/api/person/${id}');
  }


}
