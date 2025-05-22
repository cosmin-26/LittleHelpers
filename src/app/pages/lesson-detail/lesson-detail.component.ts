import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../models/lesson.model';

@Component({
  selector: 'app-lesson-detail',
  standalone :false,
  templateUrl: './lesson-detail.component.html',
  styleUrl: './lesson-detail.component.css'
})
export class LessonDetailComponent implements OnInit {
  lessons: Lesson[] = [];
  topic!: string;
  subject!: string;
  grade!: string;
  chapter!: string;
  lessonHtml: { [lessonId: number]: string } = {};

  constructor(private route: ActivatedRoute, private lessonService: LessonService,private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.topic = params['topic'];
      this.chapter = params['chapter'];
      this.subject = params['subject'];
      this.grade = params['grade'];
  
      this.lessons = this.lessonService.getLessons(this.topic, this.chapter, this.subject, this.grade);
    });
  }
    loadLessonContent(lesson: Lesson) {
    if (this.lessonHtml[lesson.id]) return; // already loaded
    console.log(lesson.contentPath);
    this.http.get(lesson.contentPath, { responseType: 'text' }).subscribe(html => {
      this.lessonHtml[lesson.id] = html;
    });
  }
}