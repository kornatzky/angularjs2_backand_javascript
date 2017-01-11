import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {BackandService} from 'vanillabknd-sdk';
import {BackandService} from './backand.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

	constructor(private router: Router, private backand: BackandService){

  		backand.initiate({
	      appName: 'todo33353',
	      signUpToken: '215e5812-5789-4475-8ccb-42f3232da176',
	      anonymousToken: '43a174e6-1a88-46dd-9081-99d3d22131a6',
	      runSocket: true
	    });
	
	}

	public navigate(url) {
		this.router.navigate([url]);
	}
}
