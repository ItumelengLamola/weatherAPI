import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather REST API Application';
  selectedFile: File = null;

  constructor(private http: HttpClient){}

  onFileSelected(event) {
    this.selectedFile =  event.target.files[0];
  }

  onUpload(){

    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('http://localhost:5000/' , fd).subscribe(res => { console.log(res);
  });
  }
}
