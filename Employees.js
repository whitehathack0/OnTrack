import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { EmployeeList, EmployeeDetails } from "./";
import styled from "styled-components";

const ScWrapper = styled.div`
    padding: 20px 0;
`;

class Employees extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPerson: null
        };

        this.selectEmployee = this.selectEmployee.bind(this);
    }

    selectEmployee(employee) {
        this.setState({
            selectedPerson: employee
        });
    }

    render() {
        return (
            <ScWrapper>
                <Row>
                    <Col lg="5">
                        <EmployeeList selectEmployee={this.selectEmployee} />
                    </Col>
                    <Col lg="7">
                        <EmployeeDetails selectedPerson={this.state.selectedPerson} />
                    </Col>
                </Row>
            </ScWrapper>

        );
    }
}

export default Employees;
