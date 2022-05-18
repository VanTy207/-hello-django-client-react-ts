import { parseToString } from '../../helpers/util';
import { Question } from './interface';
export class QuestionEntity {
    id!: number;
    display!: string;
    text!: string;
    rating!: string;
    active!: boolean;

    constructor (id: number, display: string, text: string, rating: string, active: boolean) {
        this.id= id;
        this.display= display;
        this.text= text;
        this.rating= rating;
        this.active= active;
    }
  
}

export function questionMapper(qustion: Question): QuestionEntity {
    let question: QuestionEntity = new QuestionEntity(qustion.id, qustion.question_display, qustion.question_text, parseToString(qustion.rating), qustion.active);
    return question;
}

