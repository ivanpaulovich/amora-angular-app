import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentBackEndName = 'Manga';

  constructor(private toastr: ToastrService) {
    localStorage.setItem('back-end', environment.mangaApiUrl);
  }

  changeBackEnd(be) {
    this.currentBackEndName = be;
    this.toastr.warning(`You are now using ${this.currentBackEndName}.`, 'Back-End changed!');
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
  }
}
