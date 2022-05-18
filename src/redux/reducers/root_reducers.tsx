import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import { reducer as reduxFormReducer } from "redux-form";
import { createQuestionReducer } from "./qustion_reducer";
import { CreateQuestionState } from "../actions/create_question/create_question.state";

export interface ApplicationReducerState {
  createQuestionState: CreateQuestionState
}

const rootReducers = combineReducers({
  form: reduxFormReducer,
  routerReducer: routerReducer,
  createQuestionState: createQuestionReducer
},);

export type AppState = ReturnType<typeof rootReducers>;

export default rootReducers;

