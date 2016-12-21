import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

declare var backand:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


	ngOnInit() {
	}


    
    username:string = 'test@angular2.com';
    password:string = 'angular2';
    auth_type:string = "N/A";
    is_auth_error:boolean = false;
    auth_status:string = null;
    loggedInUser: string = '';


    oldPassword: string = '';
    newPassword: string = '';
    confirmNewPassword: string = '';


    constructor() { 
        this.auth_type = null;// backand.service.getAuthType();
        this.auth_status = null; //  backand.service.getAuthStatus();
        this.loggedInUser = null; // backand.service.getUsername();
    }


    public getAuthTokenSimple() {
        this.auth_type = 'Token';
        backand.service.signin(this.username, this.password)
            .then((data: any) => {
                console.log(data);
                this.auth_status = 'OK';
                this.is_auth_error = false;
                this.loggedInUser = data.data.username;
                this.username = '';
                this.password = '';
            })
            .catch(function(error: any){
                console.log(error);
                let errorMessage: string = error.data.error_description;
                this.auth_status = `Error: ${errorMessage}`;
                this.is_auth_error = true;
                console.log(errorMessage)
            });
    }

    public useAnonymousAuth() {
        backand.service.useAnonymousAuth();
        this.auth_status = 'OK';
        this.is_auth_error = false;
        this.auth_type = 'Anonymous';
        this.loggedInUser = 'Anonymous';
    }

    public signOut() {
        this.auth_status = null;
        backand.service.signout();
    }



    public changePassword() {
        if (this.newPassword != this.confirmNewPassword){
            alert('Passwords should match');
            return;
        }
        backand.service.changePassword(this.oldPassword, this.newPassword)
            .then((data) => {
                    alert('Password changed');
                    this.oldPassword = this.newPassword = this.confirmNewPassword = '';
             })
            .catch((err) => {
                    console.log(err.data.error_description)
             });
    }

}