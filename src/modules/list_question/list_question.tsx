import React, { Component } from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { connect } from "react-redux";
import { QuestionApi } from "../../helpers/api_network";
import { FieldTime, ReduxFormInput, ReduxFormSelect } from "../../helpers/form_customer";
import "./style.css";
import { Ratings } from "../../common/constant";
import { fetchCreateQuestionRequest } from './redux/create_question.action';
import { ApplicationReducerState } from "../../root_reducers";
import { QuestionEntity, questionMapper } from "../../interfaces/question.interface";
import { Swalhtml, toastError } from "../../helpers/sweetalert.t";


interface PropsFrom2State {
  question?: QuestionEntity
  loading?: boolean,
  errors?: any,
}

export type CreateQuestionForm = {
  questionText: string,
  questionDisplay: string,
  createDate: string,
  active: boolean,
  rating: number,
};

interface initState {
  listQuestion: QuestionEntity[],
  question?: QuestionEntity,
}

interface PropsFromDispatch {
  dispatchCreateQuestion: typeof fetchCreateQuestionRequest,
}

type AllProps = PropsFrom2State & PropsFromDispatch;

class ListQuestionComponent extends Component<InjectedFormProps<CreateQuestionForm> & AllProps, initState> {
  state: initState = {
    listQuestion: [],
  }

  componentDidMount() {
    QuestionApi.getAllQuestion().then((res) => {
      if (res.result === 1) {
        let result: QuestionEntity[] = res.data.map(v => questionMapper(v));
        this.setState({
          listQuestion: result
        })
      } else {
        toastError(res.message)
        this.setState({
          listQuestion: []
        })
      }
    }).catch((err) => {
      toastError(err)
    });
  }

  handleSubmitCreateQuestion = (input: CreateQuestionForm) => {
    this.props.dispatchCreateQuestion(input);
  };

 
  handleOnclick= (event: any) => {
    QuestionApi.getDetailQuestion(event).then((res) => {
      if (res.result === 1) {
        let result: QuestionEntity = questionMapper(res.data);
        Swalhtml(result.display)
      } else {
      toastError(res.message)
      }
    }).catch((err) => {
      toastError(err)
    });
  };

  render() {
    const { handleSubmit, } = this.props;
    return (
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
                <Field name="questionDisplay"  component={ReduxFormInput} type="text" placeholder="Display Question"/>
              </Col>
              <Col>
                <label htmlFor="questionText">Question Text: </label>
                <Field name="questionText" component={ReduxFormInput} type="text" placeholder="Question Text"/>
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
                  type='select'
                  placeholder="Choose rating"
                />
              </Col>
              <Col>
                <label htmlFor="active">Active</label>
                <Field
                  name="active"
                  id="active"
                  component='input'
                  type="checkbox"
                />
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Submit Question
            </Button>
          </div>
        </form>
        <b>List Question:</b>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th >
                ID
              </th>
              <th >
                Question
              </th>
              <th >
                Display
              </th>
              <th >
                Rating
              </th>
              <th >
                Active
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.listQuestion.length > 0 &&
              this.state.listQuestion.map((item, index) => (
                <tr key={index}>
                  <td onClick={() => this.handleOnclick(item.id)} >{item.id}</td>
                  <td onClick={() => this.handleOnclick(item.id)} >{item.text}</td>
                  <td onClick={() => this.handleOnclick(item.id)} >{item.display}</td>
                  <td onClick={() => this.handleOnclick(item.id)} >{item.rating}</td>
                  <td><Field name={`active-${index}`} id={`active-${index}`}  checked={item.active} component='input' type="checkbox"/></td>
                </tr>
              ))}
          </tbody>
        </Table>
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
      </Container>
    );
  }
}

const mapStateToProps = ({ createQuestionState }: ApplicationReducerState): PropsFrom2State => {
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