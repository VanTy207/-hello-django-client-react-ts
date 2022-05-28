import moment from "moment";
import { parseToString } from "../helpers/util";

export type Question = {
    id: number;
    question_display: string;
    question_text: string;
    pub_date: string;
    rating: number;
    active: boolean;
};

export class QuestionEntity {
    id!: number;
    display!: string;
    text!: string;
    rating!: string;
    time!: string;
    active!: boolean;

    constructor(id: number, display: string, text: string, time: string, rating: string, active: boolean) {
        this.id = id;
        this.display = display;
        this.text = text;
        this.time = time;
        this.rating = rating;
        this.active = active;
    }

}

export function questionMapper(qustion: Question): QuestionEntity {

    let question: QuestionEntity = new QuestionEntity(
        qustion.id,
        qustion.question_display,
        qustion.question_text,
        parseToString(qustion.rating),
        moment(qustion.pub_date).format("kk:mm:ss DD/MM/YYYY"),
        qustion.active
    );
    return question;
}

