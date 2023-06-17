import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AcceptDataComponent } from '../dialog/accept-data/accept-data.component';
import { MatDialog } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent {
  reservationForm: FormGroup;
  constructor(public formBuilder: FormBuilder, public dialog: MatDialog) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guest: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(250)]],
    });
  }
  ngOnInit(): void {
    console.log(this.reservationForm.value);
  }
  openDialog() {
    const dialogRef = this.dialog.open(AcceptDataComponent, {
      width: '500px',
      position: {
        top: '250px',
      },
      data: {
        reservationInfo: this.reservationForm.value,
      },
      scrollStrategy: new NoopScrollStrategy(),
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  Send() {
    console.log(this.reservationForm.value);
  }
  
}
