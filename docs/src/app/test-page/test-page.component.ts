import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  category: string = "";
  questions: Question[] = [];
  
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const gotCategory = params.get('category');
      this.category =  gotCategory ? gotCategory : "Eroare-categorie";
      console.log(this.category);
    });

    if(this.category === "Eroare-categorie")
      return;
    
    const fileUrl = `assets/${this.category}/${this.category}-quiz.md`;
    this.http.get(fileUrl, { responseType: 'text' }).subscribe((fileContents) => {
        fileContents.split("\n").splice(2).join("\n").split("#### Q").forEach(
            q => {
              let question = {} as Question;
              question.text = q.split("\n")[0];
              const code = q.split("```")[1];
              question.code = code ? code : "";
              const choices = q.split("- ");
              question.r1 = choices[1] ?? "";
              question.r2 = choices[2] ?? "";
              question.r3 = choices[3] ?? "";
              question.r4 = choices[4] ?? "";
              
              let i = 0;
              for(let choice of choices) {
                if(choice[1] == 'x')
                  break;
                i++;
              }
              question.answer = i;

              const reference = q.split("[Reference]")[1];
              question.reference = reference ? reference : "";

              this.questions.push(question);
            }
          );
        this.questions.splice(0, 1);
        console.log(this.questions);
      });
  }
}
