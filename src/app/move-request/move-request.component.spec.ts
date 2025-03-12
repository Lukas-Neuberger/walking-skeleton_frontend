import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoveRequestComponent } from './move-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MoveRequestComponent', () => {
  let component: MoveRequestComponent;
  let fixture: ComponentFixture<MoveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MoveRequestComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({}) } // 🔹 Mock für ActivatedRoute
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with name, oldAddress, newAddress, and date fields', () => {
    expect(component.moveRequestForm.contains('name')).toBeTrue();
    expect(component.moveRequestForm.contains('newAddress')).toBeTrue();
    expect(component.moveRequestForm.contains('oldAddress')).toBeTrue();
    expect(component.moveRequestForm.contains('date')).toBeTrue();
  });

  it('should require all fields', () => {
    const form = component.moveRequestForm;
    expect(form.valid).toBeFalse();

    form.controls['name'].setValue('John Doe');
    expect(form.valid).toBeFalse();

    form.controls['newAddress'].setValue('123 Main St');
    expect(form.valid).toBeFalse();

    form.controls['oldAddress'].setValue('45 Main St');
    expect(form.valid).toBeFalse();

    form.controls['date'].setValue('2025-04-01');
    expect(form.valid).toBeTrue();
  });
});
