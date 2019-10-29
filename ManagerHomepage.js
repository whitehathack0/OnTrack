import React from "react";
import { Button, Card } from "react-bootstrap";
import { TeamCard } from "./";
import styled from "styled-components";

const ScWrapper = styled.div`
    width: 100%;
`;

const ScBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:-10px;

    > * {
        flex: 1 1 160px;
        margin: 10px;
    }
`;

class ManagerHomepage extends React.Component {
    render() {
        return (
            <ScWrapper>
                <h2>Hello John Doe</h2><br />
            <ScBox>
                    <TeamCard teamName="Miberty Lutual" />
                    <TeamCard teamName="Sith" />
                    <TeamCard teamName="Jedi" />
            </ScBox>
            <br /><br />
            </ScWrapper>
        );
    }
}

export default ManagerHomepage;
