import { put, call } from 'redux-saga/effects'
import { QuestionApi } from '../../helpers/api_network';
import { questionMapper } from '../../modules/list_question/question_mapper';
import { fetchCreateQuestionRequest, } from '../actions/create_question/create_question.action';
import { createQuestionFailureState, createQuestionSuccessState } from '../actions/create_question/create_question.state';
import { APIResponseBase } from '../../common/interface_common';
import { Question } from '../../modules/list_question/interface';
import { toast } from 'react-toastify';

export function* createQuestionSaga(action: ReturnType<typeof fetchCreateQuestionRequest>) {
    try {
        const response: APIResponseBase<Question> = yield call(QuestionApi.createPost, action.body);
        if (response.result === 1) {
            yield put(createQuestionSuccessState({ data: questionMapper(response.data) }));
        } else {
            throw  Error(`${response.message}`);
        }
    } catch (err) {
        if (err instanceof Error) {
            toast.error(err.message)
            yield put(createQuestionFailureState({ error: err.message}));
        } else {
            toast.error('An unknown error occured.' )
            yield put(createQuestionFailureState({ error: 'An unknown error occured.' }));
        }
    }
}
