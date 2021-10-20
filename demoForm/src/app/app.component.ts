import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demoForm';
  isVisible = false;

  constructor(private ngZone: NgZone, private router: Router) {}

  openComponent() {
    if (this.isVisible) {
      this.isVisible = false;
      this.router.navigateByUrl('');
    } else {
      this.isVisible = true;
      this.router.navigateByUrl('ContactForm');
    }
  }
}
