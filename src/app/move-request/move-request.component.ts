import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-move-request',
  templateUrl: './move-request.component.html',
  styleUrls: ['./move-request.component.css']
})
export class MoveRequestComponent {
  moveRequestForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.moveRequestForm = this.fb.group({
      name: ['', Validators.required],
      newAddress: ['', Validators.required],
      oldAddress: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.moveRequestForm.valid) {
      this.successMessage = 'Move request successfully created';
      this.moveRequestForm.reset();
    }
  }
}
