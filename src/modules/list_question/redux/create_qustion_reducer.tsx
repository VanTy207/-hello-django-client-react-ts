import { CreateQuestionRequestAction, CREATE_QUESTION_EVENT } from './create_question.action';
import { CreateQuestionRequestState, CreateQuestionState, CREATE_QUESTION_FAIL, CREATE_QUESTION_SUCCESS } from './create_question.state';


const INITIAL_STATE: CreateQuestionState = {
  loading: false,
  data: undefined,
};

type action =| CreateQuestionRequestAction | CreateQuestionRequestState

export function createQuestionReducer(state = INITIAL_STATE, action: action): CreateQuestionState {
  switch (action.type) {
    case CREATE_QUESTION_EVENT:
      return {
        ...state,
        loading: true,
      };
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        errors: undefined,
      };
    case CREATE_QUESTION_FAIL:
      return {
        ...state,
        loading: false,
        data: undefined,
        errors: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
