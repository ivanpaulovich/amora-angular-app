import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentBackEndName = 'Manga';

  /**
   *
   */
  constructor(private router: Router) {
    localStorage.setItem('back-end', 'http://grape.westus2.cloudapp.azure.com:8080/api/');
  }

  changeBackEnd(be) {
    this.currentBackEndName = be;
    switch (be) {
      case 'Manga':
        localStorage.setItem('back-end', 'http://grape.westus2.cloudapp.azure.com:8080/api/');
        break;
      case 'Acerola':
        localStorage.setItem('back-end', 'http://grape.westus2.cloudapp.azure.com:8000/api/');
        break;
      default:
        break;
    }

    this.router.navigate([`/`]);
  }
}
