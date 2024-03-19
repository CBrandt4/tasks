import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("1");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value.trim();
        if (input === "" || isNaN(parseInt(input))) {
            setRequested("0");
        } else {
            setRequested(input);
        }
    };

    const handleGain = () => {
        setAttempts(attempts + parseInt(requested));
    };

    return (
        <div>
            <span>
                <Button
                    disabled={attempts <= 0}
                    onClick={() => setAttempts(attempts - 1)}
                >
                    use
                </Button>
                <Button onClick={handleGain}>gain</Button>
                to {attempts}.
            </span>
            <Form.Group controlId="NumberInput">
                <Form.Label>Enter a Number:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={handleInputChange}
                />
            </Form.Group>
        </div>
    );
}

/*
export function Counter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            to {value}.
        </span>
    );
}
*/
