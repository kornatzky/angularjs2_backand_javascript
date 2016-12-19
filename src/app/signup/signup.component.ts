import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

declare var backand:any;

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

  constructor() {


  }

  public signUp() {
    if (this.signUpPassword != this.confirmPassword){
      alert('Passwords should match');
      return;
    }
    backand.service.signup(this.email, this.signUpPassword, this.confirmPassword, this.firstName, this.lastName)
      .then((data) => {
          alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      }).
      catch((err) => {
          backand.service.logError(err)
      });
  }

  public socialSignin(provider) {
    backand.service.socialSignin(provider)
      .then((data) => {
            console.log('Sign up succeeded with:' + provider);           
        })
      .catch((err) => {
            backand.service.logError(err)
        });
  }

  public socialSignup(provider) {
    backand.service.socialSignup(provider)
      .then((data) => {
            console.log('Sign up succeeded with:' + provider);           
        })
      .catch((err) => {
            backand.service.logError(err)
        });
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
