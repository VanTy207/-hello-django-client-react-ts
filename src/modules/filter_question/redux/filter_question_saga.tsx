import { put, call } from 'redux-saga/effects'
import { QuestionApi } from '../../../helpers/api_network';
import { APIResponseBase } from '../../../common/interface_common';
import { filterQuestionRequestEvent } from './filter_question.action';
import { getFilterFailureStateSaga, getFilterSuccessStateSaga } from './filter_question.state';
import { Question, QuestionEntity, questionMapper } from '../../../interfaces/question.interface';
import { toastError } from '../../../helpers/sweetalert.t';

export type mapFilterParams = {
    type?: string,
    value?: string,
    rating?: string,
    sort?: string,
    page?: string,
    month?: string,
}

export function* filterQuestionSaga(action: ReturnType<typeof filterQuestionRequestEvent>) {
    try {
        let mapFilter: mapFilterParams= {
            value: action.body.question, 
            type: action.body.sortField, 
            sort: action.body.sortType, 
            rating: action.body.rating,
            month: action.body.month,
            page : action.body.pagination,
        }
        const response: APIResponseBase<Question[]> = yield call(QuestionApi.filterQuestion, mapFilter);
        if (response.result == 1) {
            let result: QuestionEntity[] = response.data.map(v => questionMapper(v));
            yield put(getFilterSuccessStateSaga({ data: result }));
        } else {
            throw  Error(`${response.message}`);
        }
    } catch (err) {
        if (err instanceof Error) {
            toastError(err.message)
            yield put(getFilterFailureStateSaga({ error: err.message}));
        } else {
            toastError('An unknown error occured.')
            yield put(getFilterFailureStateSaga({ error: 'An unknown error occured.' }));
        }
    }
}
