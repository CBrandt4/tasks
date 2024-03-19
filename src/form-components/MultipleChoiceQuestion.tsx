import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    const updateChoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setChoice(event.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select value={choice} onChange={updateChoice}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            {choice === expectedAnswer ? (
                <span style={{ color: "green" }}>✔️</span>
            ) : (
                <span style={{ color: "red" }}>❌</span>
            )}
        </div>
    );
}
