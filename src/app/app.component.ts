import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var backand:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

	constructor(private router: Router){

  		backand.initiate({
	      appName: 'your app name',
	      signUpToken: 'your signup token',
	      anonymousToken: 'your anonymousToken token',
	      runSocket: true
	    });
	
	}

	public navigate(url) {
		this.router.navigate([url]);
	}
}
