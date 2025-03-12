import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-move-request',
  standalone: true,
  templateUrl: './move-request.component.html',
  styleUrls: ['./move-request.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class MoveRequestComponent {
  moveRequestForm: FormGroup;

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
      try {
        // Simuliere eine API-Anfrage (hier könnte ein HTTP-Call stehen)
        const success = this.simulateApiCall();

        if (success) {
          window.alert('Move request successfully created!');
          this.moveRequestForm.reset();
        } else {
          throw new Error('500 Internal Server Error');
        }
      } catch (error) {
        window.alert('Error: Something went wrong. Please try again later.');
      }
    }
  }

  // Simulierte API-Anfrage (50% Chance auf Fehler)
  simulateApiCall(): boolean {
    return Math.random() > 0.5; // 50% Chance auf Erfolg oder Fehler
  }
}
