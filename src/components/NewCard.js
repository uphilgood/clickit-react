import React from 'react';
import { Card, CardTitle, Col } from 'reactstrap';

const NewCard = (props) => {
  return (
      <Col sm="3">
        <Card body>
          <CardTitle>{props.name}</CardTitle>
          <img className="card-img-top" width="100px" height="250px" alt={props.name} src={props.image} onClick={() => props.handleChange(props.name, props.id)}/>
        </Card>
      </Col>
  );
};

export default NewCard;