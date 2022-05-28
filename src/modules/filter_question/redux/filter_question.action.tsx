import { IFieldFormFilterQuestion } from "../filter_question";

export const FILTER_QUESTION_EVENT = 'FILTER_QUESTION_EVENT';

export interface FilterQuestionEvent {
    type: typeof FILTER_QUESTION_EVENT;
    body: IFieldFormFilterQuestion;
}


export const filterQuestionRequestEvent = (body: IFieldFormFilterQuestion): FilterQuestionEvent => ({
    type: FILTER_QUESTION_EVENT,
    body : body
});


