import { Component, OnInit, inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export default class PersonListComponent implements OnInit {
  private contactService = inject(ContactService);

  contacts: any [] = [];

  

  ngOnInit(): void {
    this.contactService.list()
      .subscribe((contacts: any) => {
        this.contacts = contacts;
      });
  }
}
