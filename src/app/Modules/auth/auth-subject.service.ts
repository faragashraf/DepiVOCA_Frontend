import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSubjectService {
  authObject$ = new Subject<boolean>();
  constructor() { }
}
