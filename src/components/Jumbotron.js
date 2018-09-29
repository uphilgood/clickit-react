import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Avengers Click-It Game</h1>
          <p className="lead">Click All 12 Avengers without Repeating to Win!</p>
        </Container>
      </Jumbotron>
  );
};

export default Example;