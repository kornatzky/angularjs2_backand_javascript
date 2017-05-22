import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackandService, Response } from '@backand/angular2-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router, private backand:BackandService) { 

  }
  
  ngOnInit(): void {
    this.backand.init({
      appName: 'backandcrudrealtime',
      signUpToken: '9d675688-c4df-41aa-89c2-81afa68931df',
      anonymousToken: '6c7b5327-9e2a-4626-bb92-b7255b071810',
      runSocket: true,
      useAnonymousTokenByDefault: true
    });
  }
	public navigate(url: any) {
		this.router.navigate([url]);
	}
}