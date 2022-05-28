import axios, { AxiosResponse } from "axios";
import { APIResponseBase } from '../common/interface_common';
import { Question } from "../interfaces/question.interface";
import { IFieldFormFilterQuestion } from "../modules/filter_question/filter_question";
import { CreateQuestionForm } from "../modules/list_question/list_question";
import { GET_ALL_QUESTION, BASE_URL_API, GET_DETAIL_QUESTION, CREATE_QUESTION, FILTER_QUESTION} from "../common/api_path";
import { mapFilterParams } from "../modules/filter_question/redux/filter_question_saga";

const instance = axios.create({
	baseURL: BASE_URL_API,
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string, params?: any, header?: Record<string, string>) => instance.get<APIResponseBase>(url, { headers: header, params: params }).then((responseBody) => {
		return responseBody.data as APIResponseBase
	}).catch((err) => {
		throw err
	}),
	post: (url: string, body: {}, header?: Record<string, string>,) => instance.post<APIResponseBase>(url, body, { headers: header }).then(responseBody).then((responseBody) => {
		return responseBody as APIResponseBase
	}).catch((err) => {
		throw err
	}),
	put: (url: string, body: {},  header?: Record<string, string>,) => instance.put<APIResponseBase>(url, body, {headers: header}).then(responseBody).then((responseBody) => {
		return responseBody.data as APIResponseBase
	}).catch((err) => {
		throw err
	}),
	delete: (url: string) => instance.delete<APIResponseBase>(url).then(responseBody).then((responseBody) => {
		return responseBody.data as APIResponseBase
	}).catch((err) => {
		throw err
	}),
};

export const QuestionApi = {
	getAllQuestion: (): Promise<APIResponseBase<Question[]>> => requests.get(GET_ALL_QUESTION,),
	getDetailQuestion: (id: number): Promise<APIResponseBase<Question>> => requests.get(`${GET_DETAIL_QUESTION}/${id}/`),
	createQuestion: (body: CreateQuestionForm): Promise<APIResponseBase<Question>> => requests.post(CREATE_QUESTION, body),
	filterQuestion: (params: mapFilterParams): Promise<APIResponseBase<Question[]>> => requests.get(FILTER_QUESTION, params),
};