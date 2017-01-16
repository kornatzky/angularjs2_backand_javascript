import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { BackandService, Response } from 'angular2bknd-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
	constructor(private router: Router, private backand:BackandService) { 

  }
  
  ngOnInit(): void {
    this.backand.init({
      appName: 'todo33353',
      signUpToken: '215e5812-5789-4475-8ccb-42f3232da176',
      anonymousToken: '43a174e6-1a88-46dd-9081-99d3d22131a6',
      runSocket: true
    });
  }
	public navigate(url: any) {
		this.router.navigate([url]);
	}
}

