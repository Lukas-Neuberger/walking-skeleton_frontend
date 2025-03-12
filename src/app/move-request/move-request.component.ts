import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-move-request',
  standalone: true,
  templateUrl: './move-request.component.html',
  styleUrls: ['./move-request.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class MoveRequestComponent {
  moveRequestForm: FormGroup;
  submittedMoveRequest: boolean = false; // Erfolgsstatus

  constructor(private fb: FormBuilder) {
    this.moveRequestForm = this.fb.group({
      name: ['', Validators.required],
      oldAddress: ['', Validators.required],
      newAddress: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.moveRequestForm.valid) {
      this.submittedMoveRequest = false; // Zurücksetzen, bevor eine neue Anfrage gesendet wird.

      setTimeout(() => { // **Simuliere eine API-Verzögerung**
        this.submittedMoveRequest = true;
        this.moveRequestForm.reset();
      }, 500); // **500ms Delay**
    }
  }
}
