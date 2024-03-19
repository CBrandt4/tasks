import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState(true);

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }
    function updateNameInput(event: React.ChangeEvent<HTMLInputElement>) {
        const userInput = event.target.value;
        setName(userInput);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                id="Mode-check"
                label="Mode"
                checked={mode}
                onChange={updateMode}
            />
            {!mode && <div></div>}
            {mode && (
                <div>
                    <Form.Group controlId="form">
                        <Form.Control
                            value={name}
                            placeholder="Enter Name Here"
                            onChange={updateNameInput}
                        />
                    </Form.Group>
                    <Form.Check
                        id="is-student-check"
                        label="Are you a student?"
                        checked={isStudent}
                        onChange={updateStudent}
                    />
                </div>
            )}
            <div>
                {isStudent
                    ? `${name} is a student`
                    : `${name} is not a student`}
                .
            </div>
        </div>
    );
}
