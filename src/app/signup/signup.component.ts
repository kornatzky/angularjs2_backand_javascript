import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {BackandService} from '../backand.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  ngOnInit() {
  }

  email:string = '';
  firstName:string = '';
  lastName:string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';

  constructor(private backand: BackandService) {


  }

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }
    this.backand.service.signup(this.email, this.signUpPassword, this.confirmPassword, this.firstName, this.lastName)
      .then((data) => {
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      },
      (err) => {
          console.log(err)
      }
    );
  }

  public socialSignin(provider) {
    this.backand.service.socialSignin(provider)
      .then((data) => {
            console.log('Sign up succeeded with:' + provider);           
      },
      (err) => {
            console.log(err)
      }
    );
  }

  public socialSignup(provider) {
    this.backand.service.socialSignup(provider)
      .then((data) => {
            console.log('Sign up succeeded with:' + provider);           
      },
      (err) => {
            console.log(err)
      }
    );
  }

  // public inAppSocial(provider) {
  //   var $obs = backand.service.inAppSocial(provider);
  //   $obs.subscribe(                
  //       data => {
  //           console.log('Sign up succeeded with:' + provider);           
  //       },
  //       err => {
  //           backand.service.logError(err)
  //       },
  //       () => console.log('Finish Auth'));
  // }
}
