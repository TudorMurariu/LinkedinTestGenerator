import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';
import { QuestionServiceService } from '../question-service.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  shownedQuestions: Question[] = [];
  rightAnswers: number = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute, private questionService: QuestionServiceService) {}

  ngOnInit(): void {
    this.shownedQuestions = this.questionService.shownQuestions;

    this.route.paramMap.subscribe(params => {
      const rightAnswers = params.get('rightAnswers');
      this.rightAnswers = Number(rightAnswers);
    });
  }

}
