import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DisplayErrorService {

  constructor(private router: Router) { }

  displayError(msg: string) {
    console.log(msg);
    this.router.navigate(['/error', msg || 'undefined']);
  }
}
