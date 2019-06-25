import * as React from 'react';
import'./App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {
  public render() {
    return (
      <div className="container headText">
   <Container>
     <Row>
       <Col sm="6">666</Col>
       <Col sm="6">555</Col>
     </Row>
   </Container>
      </div>
    );
  }
}

export default App;
