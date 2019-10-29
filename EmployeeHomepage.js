import React from "react";
import styled from "styled-components";
import { Card, Button, Form, Row, Col, ListGroup, Nav, ProgressBar} from "react-bootstrap";

const LeftCol = styled(Col)`
  border-right: 4px solid #eee;
  border-radius:  2px 2px 2px;
  padding: 10px;
  text-align: center;
`;

const MidCol = styled(Col)`
border-right: 4px solid #eee;
border-radius:  2px 2px 2px;
`;

const RightCol = styled(Col)`
  padding: 10px;
  text-align: center;
`;

class EmployeeHomepage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        bgColor: "",
        txtColor: "#000000",
        hasClickedLeft: false,
        hasClickedMid: false,
        hasCompleted: false,
        cur: 50
      }
      this.midClick = this.midClick.bind(this);
    }

    leftClick = (e) => {
      this.setState({
        bgColor: "#eee",
        txtColor:"#000000",
        hasClickedLeft: true
      });
    }

    midClick = (e) => {
      this.setState({
      hasClickedMid: true
      });
    }

    isDone = (e) => {
      this.setState({
        hasCompleted: true,
        cur: 100
      });
    }

    render() {
        return (
          <Row>
            <LeftCol lg='1.01'>
              <Card>
              <button>
                <Card.Body style={{backgroundColor: this.state.bgColor, color: this.state.txtColor}} onClick={() => this.leftClick()}>
                  Team Specific
                </Card.Body>
              </button>
              </Card>
              <br/>
              <Card>
                <Card.Body>RIT</Card.Body>
              </Card>
              <br/>
              <Card>
                <Card.Body>Software</Card.Body>
              </Card>
              <br/>
              <Card>
                <Card.Body>Corporate Training</Card.Body>
              </Card>
              <br/>
              <Card>
                <Card.Body>MyLiberty</Card.Body>
              </Card>
              <br/>
              <br/>
              <br/>
              <br/>
            </LeftCol>
            {this.state.hasClickedLeft && (
            <MidCol lg="7">
              <Row>
                <Col >
                  <div class="card text-white bbg-success mb-3 mb-3" onClick={() => this.midClick()}>
                  <button>
                    <div class="card-header">Slack Channels</div>
                    <div class="card-body">
                      <p class="card-text">Sign up and log into slack.</p>
                      {this.state.hasClickedMid && (
                        <ProgressBar striped variant={this.state.cur === 100 ? "success" : "warning"} animated="true" now={this.state.cur} />
                      )}
                    </div>
                  </button>
                  </div>
                </Col>
                <Col >
                <div class="card text-white bg-primary mb-3 mb-3" onClick={() => this.midClick()}>
                <button>
                  <div class="card-header">Plural Sight</div>
                  <div class="card-body">
                    <p class="card-text">Create a Plural Sight account.</p>
                  </div>
                </button>
                </div>
                </Col>
                <Col >
                <div class="card text-white bg-primary mb-3 mb-3" onClick={() => this.midClick()}>
                <button>
                  <div class="card-header">MS Teams</div>
                  <div class="card-body">
                    <p class="card-text">Sign up for Microsfot Teams.</p>
                  </div>
                </button>
                </div>
                </Col>
              </Row>
            </MidCol>
            )}
            {this.state.hasClickedMid && (
              <RightCol lg="3.9">
              <form>
                <fieldset>
                <legend>Start Slack</legend>
                <p align="left">
                1. Download the Slack app <a href="https://slack.com/downloads/"> here </a>
                <br/>
                <br/>
                2. Create a Slack account
                <br/>
                <br/>
                3. Join channels used by the team:
                <br/>
                #techstart
                <br/>
                #seattle
                <br/>
                #hackathon-seattle
                <br/>
                <br/>
                <br/>
                </p>
                </fieldset>
              </form>
              <button class="btn btn-success" onClick={() => this.isDone()}>Completed</button>
              </RightCol>
            )}
          </Row>
        );
    }
}

export default EmployeeHomepage;
