import {all, takeLatest} from 'redux-saga/effects';
import { CREATE_QUESTION_EVENT } from '../../common/action_type';
import { createQuestionSaga } from './question_saga';

export default function* rootSaga() {
  yield all([
    takeLatest(CREATE_QUESTION_EVENT, createQuestionSaga),
  ]);
}