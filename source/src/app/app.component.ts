import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

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
    localStorage.setItem('back-end', environment.mangaApiUrl);
  }

  changeBackEnd(be) {
    this.currentBackEndName = be;
    switch (be) {
      case 'Manga':
        localStorage.setItem('back-end', environment.mangaApiUrl);
        break;
      case 'Acerola':
        localStorage.setItem('back-end', environment.acerolaApiUrl);
        break;
      default:
        break;
    }

    this.router.navigate([`/`]);
  }
}
