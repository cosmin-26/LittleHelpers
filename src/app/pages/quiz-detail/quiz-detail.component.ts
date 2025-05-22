import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

@Component({
  selector: 'app-quiz-detail',
  standalone: false,
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  quizId!: string;
  questions: Question[] = [];
  userAnswers: number[] = [];
  showResults = false;
  score = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('id')!;

    // Construiește path-ul în funcție de id-ul quiz-ului
    const quizPath = `assets/quizzes/${this.quizId}.json`;

    this.http.get<Question[]>(quizPath).subscribe(data => {
      this.questions = data;
      this.userAnswers = new Array(data.length).fill(-1);
    }, error => {
      console.error('Failed to load quiz file:', error);
    });
  }


  selectAnswer(qIndex: number, answerIndex: number) {
    this.userAnswers[qIndex] = answerIndex;
  }

  submitQuiz() {
    this.score = 0;
    this.questions.forEach((q, i) => {
      if (this.userAnswers[i] === q.correctIndex) {
        this.score++;
      }
    });
    this.showResults = true;
  }
}
