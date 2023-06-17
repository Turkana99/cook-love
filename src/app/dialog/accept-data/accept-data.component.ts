import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-accept-data',
  templateUrl: './accept-data.component.html',
  styleUrls: ['./accept-data.component.scss'],
})
export class AcceptDataComponent implements OnInit {
  reservationInfo: any;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}
  ngOnInit(): void {
    this.reservationInfo = this.data.reservationInfo;
  }
}
