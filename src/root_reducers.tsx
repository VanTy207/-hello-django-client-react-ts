import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import { reducer as reduxFormReducer } from "redux-form";
import { createQuestionReducer } from "./modules/list_question/redux/create_qustion_reducer";
import { FilterQuestionState } from "./modules/filter_question/redux/filter_question.state";
import { CreateQuestionState } from "./modules/list_question/redux/create_question.state";
import { filterQuestionReducer } from "./modules/filter_question/redux/filter_question_reducer";
import { IFieldFormFilterQuestion } from "./modules/filter_question/filter_question";

export interface ApplicationReducerState {
  createQuestionState: CreateQuestionState,
  filterQuestions: FilterQuestionState,
  form: {FilterQuestion?: {values?: IFieldFormFilterQuestion}},
}

const rootReducers = combineReducers({
  form: reduxFormReducer,
  routerReducer: routerReducer,
  createQuestionState: createQuestionReducer,
  filterQuestions: filterQuestionReducer
},);

export type AppState = ReturnType<typeof rootReducers>;

export default rootReducers;

