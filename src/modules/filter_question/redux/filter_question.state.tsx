import { QuestionEntity } from "../../../interfaces/question.interface";

export const FIlTER_QUESTION_SUCCESS = 'FIlTER_QUESTION_SUCCESS';
export const FILTER_QUESTION_FAIL = 'FILTER_QUESTION_FAIL';

export interface FilterQuestionState {
    readonly loading: boolean
    readonly data: QuestionEntity[]
    readonly errors?: string
    readonly message?: string,

}

export interface FilterQuestionSuccessPayload {
    data: QuestionEntity[];
}

export interface FilterQuestionFailurePayload {
    error: string;
}

export type FilterQuestionSuccess = {
    type: typeof FIlTER_QUESTION_SUCCESS;
    payload: FilterQuestionSuccessPayload;
};

export type FilterQuestionFailure = {
    type: typeof FILTER_QUESTION_FAIL;
    payload: FilterQuestionFailurePayload;
};


export const getFilterSuccessStateSaga = (
    payload: FilterQuestionSuccessPayload
): FilterQuestionSuccess => ({
    type: FIlTER_QUESTION_SUCCESS,
    payload,
});

export const getFilterFailureStateSaga = (
    payload: FilterQuestionFailurePayload
): FilterQuestionFailure => ({
    type: FILTER_QUESTION_FAIL,
    payload,
});


export type FitlerQuestionRequestState =
  | FilterQuestionSuccess
  | FilterQuestionFailure