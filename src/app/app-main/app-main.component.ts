import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit{
  fileName: string = 'folderNames.txt';
  fileUrl: string  = `assets/${this.fileName}`;
  categories: string[] = [];
  selectedValue: string = "Choose category";

  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    this.http.get(this.fileUrl, { responseType: 'text' }).subscribe((fileContents) => {
      this.categories = fileContents.split("\n").filter(elements => {
        return (elements != null && elements !== undefined && elements !== "");
       });
    });
  }

  onSelectionChange(event: any) {
    const selectedValue = event.target.value;
    this.selectedValue = selectedValue;
  }

  onStartTest(event: any) {
    if(this.categories.includes(this.selectedValue))
    {
      console.log("YAYYYY")
      console.log(this.router.url)
      this.router.navigate(['/test', { category: this.selectedValue }]);
    }
    console.log(this.selectedValue);
  }
}
