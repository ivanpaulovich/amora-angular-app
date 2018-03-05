import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentBackEndName = 'Acerola';
  apiUrls = {};

  constructor(private toastr: ToastrService) {
    this.apiUrls['Manga'] = environment.mangaApiUrl;
    this.apiUrls['Acerola'] = environment.acerolaApiUrl;
    this.apiUrls['Castanha'] = environment.castanhaApiUrl;

    this.bootstrapEvironment();
  }

  bootstrapEvironment() {
    const selectedEvn: string = localStorage.getItem('selected-back-end');

    if (selectedEvn) {
      this.changeBackEnd(selectedEvn);
    } else {
      this.changeBackEnd('Acerola');
    }
  }

  changeBackEnd(be) {
    this.currentBackEndName = be;
    localStorage.setItem('selected-back-end', this.currentBackEndName);
    localStorage.setItem('back-end', this.apiUrls[this.currentBackEndName]);
    this.toastr.warning(`You are using ${this.currentBackEndName} now.`, 'Back-End changed!');
  }
}
