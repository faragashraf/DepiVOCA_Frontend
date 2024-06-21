import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
 public spinnerLoading$ = new Subject<string>();
  constructor(private spinner: NgxSpinnerService) { }
  // Show the spinner with a dynamic message
  show(message: string = 'Loading...') {
    this.spinnerLoading$.next(message)
    this.spinner.show();
  }
  hide() {
    this.spinner.hide();
    // Hide the spinner and reset the message after 2 seconds
    setTimeout(() => {
      this.spinnerLoading$.next('Loading ...');
    }, 1000);
  }
}
