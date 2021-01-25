import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signedin$: BehaviorSubject<boolean>;

  // signedin: boolean = false;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});

    //this.authService.signout().subscribe((response) => { });

    // this.authService.signedin$.subscribe(signedin => {
    //   this.signedin = signedin;
    // });

  }
}
