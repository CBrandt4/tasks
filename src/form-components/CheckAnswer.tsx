/**
import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    return (
        <div>
            <h3>Check Answer</h3>
        </div>
    );
}
**/

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [isValid, setValid] = useState<boolean>(false);
    const [input, setInput] = useState<string>("");

    function updateInput(event: React.ChangeEvent<HTMLInputElement>) {
        const userInput = event.target.value;
        setInput(userInput);
        setValid(expectedAnswer === userInput);
    }

    return (
        <div>
            <Form.Group controlId="form">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={input}
                    placeholder="Enter Here"
                    onChange={updateInput}
                />
            </Form.Group>
            {isValid ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
