import { FilterQuestionEvent, FILTER_QUESTION_EVENT } from "./filter_question.action";
import { FilterQuestionState, FitlerQuestionRequestState, FIlTER_QUESTION_SUCCESS, FILTER_QUESTION_FAIL} from "./filter_question.state";

const INITIAL_STATE: FilterQuestionState = {
  loading: false,
  data: []
};

type action =| FilterQuestionEvent | FitlerQuestionRequestState

export function filterQuestionReducer(state = INITIAL_STATE, action: action): FilterQuestionState {
  switch (action.type) {
    case FILTER_QUESTION_EVENT:
      return {
        ...state,
        loading: true,
      };
    case FIlTER_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        errors: undefined,
      };
    case FILTER_QUESTION_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        errors: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
