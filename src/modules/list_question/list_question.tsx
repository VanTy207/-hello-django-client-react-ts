import React, { Component } from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import { Field, reduxForm, InjectedFormProps, FormProps } from "redux-form";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { QuestionApi } from "../../helpers/api_network";
import { FieldTime, ReduxFormInput, ReduxFormSelect } from "../../helpers/form_customer";
import "./index.css";
import { QuestionEntity, questionMapper } from "./question_mapper";
import { Ratings } from "../../common/constant";
import { CreateQuestionForm } from "./interface";
import { fetchCreateQuestionRequest } from '../../redux/actions/create_question/create_question.action';
import { ApplicationReducerState } from "../../redux/reducers/root_reducers";

// type MyListQuestionComponentState = {
//   question?: QuestionEntity
//   listQuestion: QuestionEntity[],
//   loading?: boolean,
//   data?: any,
//   errors?: any,
// };

interface PropsFrom2State {
  question?: QuestionEntity
  loading?: boolean,
  errors?: any,
}

interface initState {
  listQuestion: QuestionEntity[],
  loading?: boolean,
}

interface PropsFromDispatch {
  dispatchCreateQuestion: typeof fetchCreateQuestionRequest,
}

type AllProps = PropsFrom2State & PropsFromDispatch;

class ListQuestionComponent extends Component<InjectedFormProps<CreateQuestionForm> & AllProps, initState> {
  state: initState = {
    listQuestion: [],
    loading: false
  }

  componentDidMount() {
    QuestionApi.getPosts().then((res) => {
      if (res.result === 1) {
        let result: QuestionEntity[] = res.data.map(v => questionMapper(v));
        this.setState({
          listQuestion: result
        })
      } else {
        this.setState({
          listQuestion: []
        })
      }
    }).catch((err) => {
      toast.error(err)
    });
  }

  handleSubmitCreateQuestion = (input: any) => {
    const values: CreateQuestionForm = input as CreateQuestionForm;
    this.props.dispatchCreateQuestion(values);
  };

  handleSubmitForm = (input: any) => {

  };

  render() {
    const { handleSubmit,question, } = this.props;
    console.log(question?.active)
    return (
      <div>
        <Container>
          <b>Fielter Question:</b>
          <form onSubmit={handleSubmit(this.handleSubmitForm)}>
            <div>
              <label htmlFor="idQuestion">ID Question: </label>
              <Field name="idQuestion" component={ReduxFormInput} type="text" />
              <button type="submit">Submit</button>
            </div>
          </form>
          <Row>
            <Col className={"question"}>
              <b>Question:</b>
            </Col>
            <Col className={"question"}>
              <b>Answer:</b>
            </Col>
          </Row>
          {this.props.question?.display && (
            <Row>
              <Col className={"question"}>
                {this.props.question?.display}
              </Col>
              <Col className={"answer"}>
                <b>{this.props.question?.active ? "true" : "false"}</b>
              </Col>
            </Row>
          )}
        </Container>
        <Container>
          <b>Create Question:</b>
          <form
            onSubmit={handleSubmit(this.handleSubmitCreateQuestion)}
            method="post"
          >
            <div>
              <Row className="d-flex justify-content-center align-items-center">
                <Col>
                  <label htmlFor="questionDisplay">Display Question: </label>
                  <Field name="questionDisplay" component={ReduxFormInput} type="text" />
                </Col>
                <Col>
                  <label htmlFor="questionText">Question Text: </label>
                  <Field name="questionText" component={ReduxFormInput} type="text" />
                </Col>
                <Col>
                  <label htmlFor="createDate">Create Date: </label>
                  <Field
                    name="createDate"
                    component={FieldTime}
                    placeholder="dd/mm/yyyy"
                  />
                </Col>
                <Col>
                  <label>rating</label>
                  <Field
                    name="rating"
                    component={ReduxFormSelect}
                    datas={Ratings}
                    placeholder="Choose rating"
                  />
                </Col>
                <Col>
                  <label htmlFor="active">Active</label>
                  <Field
                    name="active"
                    id="active"
                    component="input"
                    type="checkbox"
                  />
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </form>
          <b>List Question:</b>
          <Table striped bordered hover>
            <thead>
              <tr>
                {this.state.listQuestion.length > 0 &&
                  this.state.listQuestion.map((item, index) => (
                    <th key={index}>
                      {item.text} (ID: {item.id})
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {this.state.listQuestion.length > 0 &&
                  this.state.listQuestion.map((item, index) => (
                    <td key={index}> {item.text} {item.rating}</td>
                  ))}
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container>
          <b>Create Question:</b>
          {this.props.question?.display && (
            <Row>
              <Col className={"question"}>
                {this.props.question.display}
              </Col>
              <Col className={"answer"}>
                <b>{this.props.question.active ? "true" : "false"}</b>
              </Col>
            </Row>
          )}
        </Container>

        <div>
          <label>
            <b>Fitlter</b>
          </label>
          <Row>
            <label>
              <Field name="sex" component="input" type="radio" value="true" />{" "}
              Active
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="false" />{" "}
              Deactive
            </label>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({createQuestionState}: ApplicationReducerState): PropsFrom2State => {
  return {
    loading: createQuestionState.loading,
    errors: createQuestionState.errors,
    question: createQuestionState.data,
  }
}

const mapDispatchToProps: PropsFromDispatch = {
  dispatchCreateQuestion: fetchCreateQuestionRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm<CreateQuestionForm, AllProps>({
    form: "FormListQuestionComponent"
  })(ListQuestionComponent as any)
);


// const formWrapper = reduxForm<CreateQuestionForm, AllProps>({form: "FormListQuestionComponent"})(ListQuestionComponent  as any);
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(
//   formWrapper
// );


