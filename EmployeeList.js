import React from "react";
import {ListGroup} from "react-bootstrap";

const EmployeeList = ((props) => {
    const peeps = ["Stephen Cioffi", "Freya Varez", "Bob Barker", "Betty White"];

    return (
        <ListGroup variant="flush">
            {peeps.map((name, index) => {
                return (
                    <ListGroup.Item onClick={() => props.selectEmployee(name)} key={index}>{name}</ListGroup.Item>
                );
            })}
        </ListGroup>
    )
});

export default EmployeeList;
