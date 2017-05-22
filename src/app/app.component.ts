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
      appName: 'your app name',
      signUpToken: 'your signup token',
      anonymousToken: 'your anonymous token',
      runSocket: true
    });
  }
	public navigate(url: any) {
		this.router.navigate([url]);
	}
}