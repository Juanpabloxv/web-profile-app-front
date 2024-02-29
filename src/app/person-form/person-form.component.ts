import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export default class PersonFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private contactService = inject(ContactService);

  form = this.fb.group({
    firsName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    numeroTelefono: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    pais: ['', [Validators.required]],
  })

  create() {
    const contact = this.form.value;
    this.contactService.create(contact)
      .subscribe( () => {
        this.router.navigate(['/profile'])

      });
  }
}
