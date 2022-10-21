import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translation';
  username: string = "";
  password: string = "";
  selectLang: string = "";
  TransLang: string[] = [];

  LoginFormLabels = {
    username: "Username",
    password: "Password",
    submit: "Submit"
  }
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'fr']);
    translate.use('en');
  }
  setTransLanguage() {
    this.translate.use(this.selectLang);
  }
  getTransLanguage() {
    this.TransLang = [...this.translate.getLangs()];
  }
  ngOnInit(): void {
    this.getTransLanguage();
  }

}


