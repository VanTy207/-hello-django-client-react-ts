import { QuestionEntity } from "../../../interfaces/question.interface";

export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';
export const CREATE_QUESTION_FAIL = 'CREATE_QUESTION_FAIL';

export interface CreateQuestionState {
    readonly loading: boolean
    readonly data?: QuestionEntity
    readonly errors?: string
    readonly message?: string,

}

export const createQuestionSuccessState = (
    payload: createQuestionSuccessPayload
): CreateQuestionSuccess => ({
    type: CREATE_QUESTION_SUCCESS,
    payload,
});

export const createQuestionFailureState = (
    payload: createQuestionFailurePayload
): CreateQuestionFailure => ({
    type: CREATE_QUESTION_FAIL,
    payload,
});



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