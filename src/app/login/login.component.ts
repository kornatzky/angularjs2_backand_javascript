import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { BackandService } from '@backand/angular2-sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    username:string = 'test@angular2.com';
    password:string = 'angular2';
    auth_type:string = "N/A";
    is_auth_error:boolean = false;
    auth_status:string = null;
    loggedInUser: string = '';


    oldPassword: string = '';
    newPassword: string = '';
    confirmNewPassword: string = '';



    constructor(private backand: BackandService) {
        this.backand.user.getUserDetails().then(
            (data: any) => {
                console.log(data);
                if (data.data){
                    this.loggedInUser = data.data.username;
                    this.auth_status = 'OK';
                    this.auth_type = data.data.token_type == 'Anonymous' ? 'Anonymous' : 'Token';
                }
                else{
                    this.auth_status = null;
                }
            },
            (err: any) => {
                console.log(err);
                this.loggedInUser = null;
                this.auth_status = null;
                this.auth_type = null;
            }
        );
    }

    ngOnInit() : void {
    }


    public getAuthTokenSimple() {
        this.auth_type = 'Token';
        this.backand.signin(this.username, this.password)
            .then((data: any) => {
                console.log(data);
                this.auth_status = 'OK';
                this.is_auth_error = false;
                this.loggedInUser = data.data.username;
                this.username = '';
                this.password = '';
            },
            (error: any) => {
                console.log(error);
                let errorMessage: string = error.data.error_description;
                this.auth_status = `Error: ${errorMessage}`;
                this.is_auth_error = true;
                console.log(errorMessage)
                this.auth_status = 'ERROR';
            }
        );
    }

    public useAnonymousAuth() {
        this.backand.useAnonymousAuth();
        this.auth_status = 'OK';
        this.is_auth_error = false;
        this.auth_type = 'Anonymous';
        this.loggedInUser = 'Anonymous';
    }

    public signOut() {
        this.auth_status = null;
        this.backand.signout();
    }



    public changePassword() {
        if (this.newPassword != this.confirmNewPassword){
            alert('Passwords should match');
            return;
        }
        this.backand.changePassword(this.oldPassword, this.newPassword)
            .then((data: any) => {
                    alert('Password changed');
                    this.oldPassword = this.newPassword = this.confirmNewPassword = '';
            },
            (err: any) => {
                    console.log(err.data.error_description)
            }
        );
    }

}
