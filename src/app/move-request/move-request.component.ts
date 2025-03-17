import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MoveRequestService } from '../services/move-request.service';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-move-request',
  standalone: true,
  templateUrl: './move-request.component.html',
  styleUrls: ['./move-request.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink]
})
export class MoveRequestComponent {
  moveRequestForm: FormGroup;
  submittedMoveRequest: boolean = false;
  moveRequests: any[] = [];

  constructor(private fb: FormBuilder, private moveRequestService: MoveRequestService) {
    this.moveRequestForm = this.fb.group({
      name: ['', Validators.required],
      oldAddress: ['', Validators.required],
      newAddress: ['', Validators.required],
      date: ['', [Validators.required, this.validateDate]]
    });
  }

  onSubmit() {
    if (this.moveRequestForm.valid) {
      const formValue = this.moveRequestForm.value;
      formValue.date = this.formatDate(formValue.date);

      this.moveRequestService.createMoveRequest(formValue).subscribe({
        next: (response) => {
          console.log('Move request created:', response);
          alert("Move request successfully created!");
          this.moveRequestForm.reset();
        },
        error: (error) => {
          console.error('Error creating move request:', error);
        }
      });
    } else {
      console.log('Form is invalid:', this.moveRequestForm.errors);
    }
  }


  private formatDate(date: string): string {
    return new Date(date).toISOString().split('T')[0];
  }

  private validateDate(control: any) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    if (selectedDate < today) {
      return { invalidDate: true };
    }
    return null;
  }
}
