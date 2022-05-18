import { QuestionEntity } from "../../../modules/list_question/question_mapper";

export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_FAIL = 'CREATE_QUESTION_FAIL';

export interface createQuestionSuccessPayload {
    data: QuestionEntity;
}

export interface createQuestionFailurePayload {
    error: string;
}

export type CreateQuestionSuccess = {
    type: typeof CREATE_QUESTION_SUCCESS;
    payload: createQuestionSuccessPayload;
};

export type CreateQuestionFailure = {
    type: typeof CREATE_QUESTION_FAIL;
    payload: createQuestionFailurePayload;
};


export type CreateQuestionRequestState =
  | CreateQuestionSuccess
  | CreateQuestionFailure