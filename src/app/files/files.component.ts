import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BackandService } from '@backand/angular2-sdk';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  url: string = "";
  disabled: boolean = true;
  name: string = "";
  @ViewChild('inputFile') inputFile: any;

  constructor(private backand: BackandService) { }


  ngAfterViewInit() {
	let source = Observable.fromEvent(this.inputFile.nativeElement, 'change');
	let subscription = source.subscribe(
	  (event: Event) => {
	    let reader = new FileReader();
	    reader.onload = (e: any) => {
	        let data = e.currentTarget.result;
	        this.backand.file.upload("todo", "files", file.name, data).then(
		      	(data: any) => {
              this.disabled = !this.disabled;
              this.url = data.data.url;
		      		console.log(data);
		      	},
		      	(err: any) => {
		      		console.log(err);
		      	}
		    );
	    };
   		let file = (<any>event.target).files[0];
    	reader.readAsDataURL(file);
      this.name = file.name;
	  },
	  function (err) {
	    console.log('Error: %s', err);
	  },
	  function () {
	    console.log('Completed');
	  });

  }

  removeFile() {
    this.backand.file.remove("todo", "files", this.name).then(
      (data: any) => {
        this.disabled = !this.disabled;
        this.url = "";
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      }
  );
  }

  ngOnInit() {
  }

}
