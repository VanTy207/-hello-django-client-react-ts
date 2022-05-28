import * as React from 'react';
import { Container } from 'react-bootstrap';

export interface ISortQuestionProps {
}

export interface ISortQuestionState {
}

export default class SortQuestion extends React.Component<ISortQuestionProps, ISortQuestionState> {
  constructor(props: ISortQuestionProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <Container>
          SortQuestion
      </Container>
    );
  }
}
