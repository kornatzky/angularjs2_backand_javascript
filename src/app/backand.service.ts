declare var backand: any; 

// import '../../node_modules/vanillabknd-sdk/dist/backand.js';
import { Injectable } from '@angular/core';

 

@Injectable()
export class BackandService {

  public service: any;
  public socket: any;
  public helpers: any;
  public initiate: any;

  constructor() { 
  	this.service = backand.service;
  	this.socket = backand.socket;
  	this.helpers = backand.helpers;
  	this.initiate = backand.initiate;
  }

}
