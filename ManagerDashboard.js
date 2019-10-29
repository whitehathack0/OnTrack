import React from "react";
import styled from "styled-components";
import {Row, Col, Nav} from "react-bootstrap";
import {Employees, Templates} from "./";
import {BrowserRouter, Route} from "react-router-dom";

const ScNavLink = styled(Nav.Link)`
    font-size: 2em;
`;

class ManagerDashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: "Employees"
        };

        this.changeScreen = this.changeScreen.bind(this);
    }

    changeScreen(screen) {
        this.setState({
            screen: screen
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg="12">
                        <Nav justify variant="tabs" defaultActiveKey="/Manager/Employees">
                            <Nav.Item>
                                <ScNavLink active={this.state.screen === "Employees"} onClick={() => this.changeScreen("Employees")}>Employees</ScNavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <ScNavLink active={this.state.screen === "Templates"} onClick={() => this.changeScreen("Templates")}>Templates</ScNavLink>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <div>
                    {this.state.screen === "Employees" && <Employees />}
                    {this.state.screen === "Templates" && <Templates />}
                </div>
            </div>
        );
    }
}

export default ManagerDashboard
