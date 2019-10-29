import React from "react";
import {ProgressBar} from "react-bootstrap";

const EmployeeDetails = ((props) => {
    return (
        <div>
            {props.selectedPerson}
            <ProgressBar striped variant="info" now={Math.random()*100} />
        </div>
    )
});

export default EmployeeDetails;
