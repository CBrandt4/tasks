import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState(10);

    const doubleValue = () => {
        setDhValue(dhValue * 2);
    };

    const halveValue = () => {
        setDhValue(dhValue * 0.5);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={doubleValue}>Double</Button>
            <Button onClick={halveValue}>Halve</Button>
        </div>
    );
}
