import {all, takeLatest} from 'redux-saga/effects';
import { FILTER_QUESTION_EVENT } from './modules/filter_question/redux/filter_question.action';
import { filterQuestionSaga } from './modules/filter_question/redux/filter_question_saga';
import { CREATE_QUESTION_EVENT } from './modules/list_question/redux/create_question.action';
import { createQuestionSaga } from './modules/list_question/redux/create_question_saga';

export default function* rootSaga() {
  yield all([
    takeLatest(CREATE_QUESTION_EVENT, createQuestionSaga),
    takeLatest(FILTER_QUESTION_EVENT, filterQuestionSaga),
  ]);
}