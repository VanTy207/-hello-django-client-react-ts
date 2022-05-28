import * as React from 'react';
import { Container, Row, Col, Pagination,Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm,  } from 'redux-form';
import { Months, SortField, SortType, Ratings } from '../../common/constant';
import { FieldOnChangeBase } from '../../common/interface_common';
import { ReduxFormInput, ReduxFormSelect } from '../../helpers/form_customer';
import { QuestionEntity } from '../../interfaces/question.interface';
import { ApplicationReducerState } from '../../root_reducers';
import { filterQuestionRequestEvent } from './redux/filter_question.action';


interface IFilterQuestionProps {
  listQuestion: QuestionEntity[],
  totalPage?: number[],
  fileds?: IFieldFormFilterQuestion
}

interface IFilterQuestionState {
  pageCurrent: number,
}

export interface IFieldFormFilterQuestion {
  question?: string
  sortField?: string
  sortType?: string,
  month?: string,
  rating?: string,
  pagination?: string,
}

interface PropsFromDispatch {
  dispatchFilterQuestion: typeof filterQuestionRequestEvent,
}


type IAllProps = IFilterQuestionProps & PropsFromDispatch & InjectedFormProps<IFieldFormFilterQuestion>;

class FilterQuestion extends React.Component<IAllProps, IFilterQuestionState> {
  constructor(props: IAllProps) {
    super(props);
    this.state = {
      pageCurrent: 1,
    }
  }

  componentDidMount(){
    let aa: IFieldFormFilterQuestion = {};
    this.props.dispatchFilterQuestion(aa);
  }

  handleSubmitForm = (input: IFieldFormFilterQuestion) => {

  };

  onChangeQuestion = (input: FieldOnChangeBase) => {
    console.log(input.currentTarget.value)
    // this.props.dispatchFilterQuestion()
  }

  handlePageChange(event: any) {
    const clickValue = event.target.offsetParent.getAttribute("data-page")
    ? event.target.offsetParent.getAttribute("data-page")
    : event.target.getAttribute("data-page");
    console.log(clickValue)
    this.props.change('pagination', clickValue);
    this.setState({
      pageCurrent: clickValue
    })
  }

  render() {
    const { handleSubmit, listQuestion, fileds} = this.props;
    console.log(fileds);
    console.log(fileds?.sortField);
    return (
      <Container>
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
          <Row className="d-flex justify-content-center align-items-center">
            <Col>
              <label htmlFor="Question">Question: </label>
              <Field name="question" component={ReduxFormInput} type="text" placeholder='Enter'/>
            </Col>
            <Col>
              <label>Field</label>
              <Field
                name="sortField"
                component={ReduxFormSelect}
                datas={SortField}
                placeholder="Choose field"
              />
            </Col>
            <Col>
              <label>Month </label>
              <Field
                name="month"
                component={ReduxFormSelect}
                datas={Months}
                disabled={fileds?.sortField == undefined || fileds?.sortField == '1' || fileds?.sortField == '3'}
                placeholder="Choose month"
              />
            </Col>
            <Col>
              <label>Rating </label>
              <Field
                name="rating"
                component={ReduxFormSelect}
                datas={Ratings}
                disabled={fileds?.sortField == undefined || fileds?.sortField == '1' || fileds?.sortField == '2'}
                placeholder="Choose rating"
              />
            </Col>
            <Col>
              <label>Sort Type </label>
              <Field
                name="sortType"
                component={ReduxFormSelect}
                datas={SortType}
                disabled={fileds?.sortField == undefined || fileds?.sortField == '1' || fileds?.sortField == '2'}
                placeholder="Choose type"
              />
            </Col>
          </Row>
        </form>
        <Table striped bordered hover className='mt-5'>
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
                Time
              </th>
              <th >
                Active
              </th>
            </tr>
          </thead>
          <tbody>
            {listQuestion?.length > 0 &&
              listQuestion.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.text}</td>
                  <td>{item.display}</td>
                  <td>{item.time}</td>
                  <td>{item.rating}</td>
                  <td><Field name={`active-${index}`} id={`active-${index}`}  checked={item.active} component='input' type="checkbox"/></td>
                </tr>
              ))}
          </tbody>
        </Table>
        <div className='row mt-5'>
          <Pagination onClick={(event) => this.handlePageChange(event)} className='d-flex justify-content-center align-items-center'>
            {[1, 2,3 ,4,6,7,8]?.map((value, index) => (
              <Pagination.Item key={index} active={value == this.state.pageCurrent} data-page={value}>
                {value}
              </Pagination.Item>
            ))}
          </Pagination>
          <Field
            component={ReduxFormInput}
            name="pagination"
            multiple={false}
            type="input"
            hidden
          />
        </div>
      </Container>
    );
  }
}
const mapStateToProps = ({ filterQuestions, form}: ApplicationReducerState): IFilterQuestionProps => {
  let _listTemp: QuestionEntity[] = filterQuestions.data;
  return {
    listQuestion: _listTemp,
    fileds: form.FilterQuestion?.values
  }
}

const mapDispatchToProps: PropsFromDispatch = {
  dispatchFilterQuestion: filterQuestionRequestEvent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm<IFieldFormFilterQuestion, IFilterQuestionProps>({
  form: "FilterQuestion",
  onChange: (fields: IFieldFormFilterQuestion, dispatch, props) => {
    dispatch(filterQuestionRequestEvent(fields))
  }
})(FilterQuestion as any))

