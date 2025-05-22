import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../models/lesson.model';
import quizList from '../../../../public/assets/quizzes/quiz_list.json'; // Ajustează calea dacă e altundeva




@Component({
  selector: 'app-topic-view',
  standalone: false,
  templateUrl: './topic-view.component.html',
  styleUrl: './topic-view.component.css'
})
export class TopicViewComponent {
  topic = '';
  groupedBySubject: {
    [subject: string]: {
      [grade: string]: {
        [chapter: string]: Lesson[]
      }
    }
  } = {};
  grades = ['9', '10', '11', '12'];
  selectedGrade: { [subject: string]: string } = {};

  Object = Object;

  constructor(private route: ActivatedRoute, private lessonService: LessonService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.topic = params['topic'];
      const lessons = this.lessonService.getChaptersByTopic(this.topic);
  
      this.groupedBySubject = {};
  
      lessons.forEach(lesson => {
        const { subject, grade, chapter } = lesson;
  
        if (!this.groupedBySubject[subject]) {
          this.groupedBySubject[subject] = {};
          this.selectedGrade[subject] = '9';
        }
  
        if (!this.groupedBySubject[subject][grade]) {
          this.groupedBySubject[subject][grade] = {};
        }
  
        if (!this.groupedBySubject[subject][grade][chapter]) {
          this.groupedBySubject[subject][grade][chapter] = [];
        }
  
        this.groupedBySubject[subject][grade][chapter].push(lesson);
      });
    });
  }

  goToLesson(lesson: Lesson) {
    const link = `/lessons/${lesson.topic}/${lesson.subject}/${lesson.grade}/${lesson.chapter}`;
    this.router.navigate([link]);
  }

  goToQuizzes(lesson: Lesson) {
    // Ruta exemplu pentru pagina de grile aferentă lecției
    // Ajustează ruta după cum ai definit-o în routing
    const link = `/quiz-list/${lesson.topic}/${lesson.subject}/${lesson.grade}/${lesson.chapter}`;
    this.router.navigate([link]);
  }


  goToChapterQuiz(lesson:Lesson) {
    this.router.navigate(['/quizzes', lesson.quizID]);

  }
}
