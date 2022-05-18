import { QuestionEntity } from '../../../modules/list_question/question_mapper';
import { createQuestionSuccessPayload, CreateQuestionSuccess, createQuestionFailurePayload, CreateQuestionFailure, CREATE_QUESTION_SUCCESS, CREATE_QUESTION_FAIL } from './create_qustion.type';


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