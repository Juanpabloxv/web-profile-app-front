import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PersonService } from '../services/person.service';
import { Person } from '../person-model/person.interfase';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export default class PersonFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private personService = inject(PersonService);

  form?:FormGroup;
  person?:Person;

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');

      if (id) {
        this.personService.get(parseInt(id))
        .subscribe( person => {
          this.person = person;
          this.form = this.fb.group({
            firstName: [person.firstName, [Validators.required]],
            lastName: [person.lastName, [Validators.required]],
            email: [person.email, [Validators.required]],
            numeroTelefono: [person.numeroTelefono, [Validators.required]],
            ciudad: [person.ciudad, [Validators.required]],
            pais: [person.pais, [Validators.required]],
          })
        })
      } else {
        this.form = this.fb.group({
          firstName: ['', [Validators.required]],
          lastName: ['', [Validators.required]],
          email: ['', [Validators.required]],
          numeroTelefono: ['', [Validators.required]],
          ciudad: ['', [Validators.required]],
          pais: ['', [Validators.required]],
        })
      }

  }

  save() {
    const personForm = this.form!.value;
    if(this.person) {
      this.personService.update(this.person.id, personForm)
      .subscribe( () => {
        this.router.navigate(['/profile'])
      });  
    }else{
      this.personService.create(personForm)
      .subscribe( () => {
        this.router.navigate(['/profile'])
      });
    }
  }
}
