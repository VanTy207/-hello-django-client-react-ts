import { put, call } from 'redux-saga/effects'
import { QuestionApi } from '../../../helpers/api_network';
import { fetchCreateQuestionRequest, } from './create_question.action';
import { APIResponseBase } from '../../../common/interface_common';
import { createQuestionFailureState, createQuestionSuccessState } from './create_question.state';
import { Question, questionMapper } from '../../../interfaces/question.interface';
import { toastError, toastSuccess } from '../../../helpers/sweetalert.t';

export function* createQuestionSaga(action: ReturnType<typeof fetchCreateQuestionRequest>) {
    try {
        const response: APIResponseBase<Question> = yield call(QuestionApi.createQuestion, action.body);
        console.log('response.result ' + response.result )
        if (response.result == 1) {
            toastSuccess(response.message)
            yield put(createQuestionSuccessState({ data: questionMapper(response.data) }));
        } else {
            throw  Error(`${response.message}`);
        }
    } catch (err) {
        if (err instanceof Error) {
            toastError(err.message)
            yield put(createQuestionFailureState({ error: err.message}));
        } else {
            toastError('An unknown error occured.')
            yield put(createQuestionFailureState({ error: 'An unknown error occured.' }));
        }
    }
}
