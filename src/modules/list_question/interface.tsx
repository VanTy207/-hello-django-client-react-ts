export type Question = {
  id: number;
  question_display: string;
  question_text: string;
  rating: string;
  active: boolean;
};

export type CreateQuestionForm = {
  questionText: String,
  questionDisplay: String,
  createDate?: String,
  active: boolean,
  rating?: number,
};