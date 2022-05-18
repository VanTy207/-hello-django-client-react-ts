import { CreateQuestionForm } from '../../../modules/list_question/interface';
import { CREATE_QUESTION_EVENT } from '../../../common/action_type';

export interface CreateQuestionRequestAction {
    type: typeof CREATE_QUESTION_EVENT;
    body: CreateQuestionForm;
}


export const fetchCreateQuestionRequest = (body: CreateQuestionForm): CreateQuestionRequestAction => ({
    type: CREATE_QUESTION_EVENT,
    body : body
});


