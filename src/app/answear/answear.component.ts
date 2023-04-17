import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-answear',
  templateUrl: './answear.component.html',
  styleUrls: ['./answear.component.css']
})
export class AnswearComponent implements OnInit {
  style1: string = "";
  style2: string = "";
  style3: string = "";
  style4: string = "";

  @Input() 
  question = {} as Question;

  ngOnInit(): void {

    if(this.question.answer == this.question.choiseMade) {
      switch(this.question.answer) {
        case 1:
          this.style1 = "background-color: #4caf50; color: #fff; border-color: #4caf50;";
          break;
        case 2:
          this.style2 = "background-color: #4caf50; color: #fff; border-color: #4caf50;";
          break;
        case 3:
          this.style3 = "background-color: #4caf50; color: #fff; border-color: #4caf50;";
          break;
        case 4:
          this.style4 = "background-color: #4caf50; color: #fff; border-color: #4caf50;";
          break;
        default:
          console.log("eroare");
          console.log(this.question.answer);
      }
    }
    else {
      switch(this.question.answer) {
        case 1:
          this.style1 = "background-color: #4caf50; color: #fff; border-color: #4caf50;";
          break;
        case 2:
          this.style2 = "background-color: #4caf50; color: #fff; border-color: #4caf50;";
          break;
        case 3:
          this.style3 = "background-color: #4caf50; color: #fff; border-color: #4caf50;";
          break;
        case 4:
          this.style4 = "background-color: #4caf50; color: #fff; border-color: #4caf50;";
          break;
        default:
          console.log("eroare");
          console.log(this.question.answer);
      }

      switch(this.question.choiseMade) {
        case 1:
          this.style1 = "background-color: #e74c3c; color: #fff; border-color: #e74c3c;";
          break;
        case 2:
          this.style2 = "background-color: #e74c3c; color: #fff; border-color: #e74c3c;";
          break;
        case 3:
          this.style3 = "background-color: #e74c3c; color: #fff; border-color: #e74c3c;";
          break;
        case 4:
          this.style4 = "background-color: #e74c3c; color: #fff; border-color: #e74c3c;";
          break;
        default:
          console.log("eroare choiseMade adica nu eroare inca ");
      }
    }
  }
}
