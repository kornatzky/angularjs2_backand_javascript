import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import {BackandService} from '../backand.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  @ViewChild('inputFile') inputFile; 


  constructor(private backand: BackandService) { 
  	
  }


  ngAfterViewInit() {
	let source = Observable.fromEvent(this.inputFile.nativeElement, 'change');
	let subscription = source.subscribe(
	  function (event: Event) {
	    let reader = new FileReader();
	    reader.onload = function(e: any) {
	        let data = e.currentTarget.result;
		    this.backand.service.uploadFile("todo", "files", file.name, data).then(
		      	(data) => { 
		      		console.log(data);
		      	},
		      	(err) => {
		      		console.log(err);
		      	}
		    );
	    };
   		let file = (<any>event.target).files[0];
    	reader.readAsDataURL(file);
	  },
	  function (err) {
	    console.log('Error: %s', err);
	  },
	  function () {
	    console.log('Completed');
	  });

  }

  ngOnInit() {
  }

}
