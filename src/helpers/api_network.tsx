import axios, {AxiosResponse} from "axios";
import { GET_ALL_QUESTION, BASE_URL_API ,GET_DETAIL_QUESTION, CREATE_QUESTION } from "../common/api_path";
import { CreateQuestionForm, Question } from '../modules/list_question/interface';
import { APIResponseBase } from '../common/interface_common';

const instance = axios.create({
	baseURL: BASE_URL_API,
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string, header?:  Record<string, string>, param?: any) => instance.get<APIResponseBase>(url,{headers: header, params: param} ).then((responseBody) => {
    return responseBody.data as APIResponseBase
  }).catch((err) => {
    throw Error('App Error')
  }),
	post: (url: string, body: {}, header?:  Record<string, string>,) => instance.post<APIResponseBase>(url, body, {headers: header}).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const QuestionApi = {
	getPosts: (): Promise<APIResponseBase<Question[]>> => requests.get(GET_ALL_QUESTION,),
	getAPost: (id: number): Promise<APIResponseBase<Question>> => requests.get(`${GET_DETAIL_QUESTION}/${id}/`),
	createPost: (body: CreateQuestionForm): Promise<APIResponseBase<Question>> => requests.post(CREATE_QUESTION, body),
	// updatePost: (post: PostType, id: number): Promise<PostType> =>
	// 	requests.put(`posts/${id}`, post),
	// deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};