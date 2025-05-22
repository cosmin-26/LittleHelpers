export interface Lesson {
    id: number;
    topic: string;
    grade: '9' | '10' | '11' | '12';
    subject: string;
    chapter:string;
    title: string;
    contentPath: string;
    quizID:string
}

export interface LessonContentBlock {
  type: 'paragraph' | 'image' | 'code' | 'video';
  value: string;
}