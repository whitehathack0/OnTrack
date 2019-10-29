import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class TeamCard extends React.Component{
    render(){
        return (
            <Link to="/Manager/Dashboard">
                <Card bg="primary" text="white" style={{ width: '18rem' , height: '10rem'}}>
                    <Card.Body>
                        <Card.Title>{this.props.teamName}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        )
    }
}

export default TeamCard;