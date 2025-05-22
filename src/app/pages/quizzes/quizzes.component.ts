import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface QuizItem {
  id: string;
  title: string;
  path: string;
}

@Component({
  selector: 'app-quiz-list',
  standalone: false,
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes: QuizItem[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<QuizItem[]>('assets/quizzes/quiz_list.json').subscribe(data => {
      this.quizzes = data;
    });
  }

  openQuiz(quiz: QuizItem) {
    // Trimitem id-ul în URL și path-ul în query params
    this.router.navigate(['/quizzes', quiz.id]);
  }
}
