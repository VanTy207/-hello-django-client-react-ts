import { CreateQuestionForm } from "../list_question";

export const CREATE_QUESTION_EVENT = 'CREATE_QUESTION_EVENT';

export interface CreateQuestionRequestAction {
    type: typeof CREATE_QUESTION_EVENT;
    body: CreateQuestionForm;
}


export const fetchCreateQuestionRequest = (body: CreateQuestionForm): CreateQuestionRequestAction => ({
    type: CREATE_QUESTION_EVENT,
    body : body
});


