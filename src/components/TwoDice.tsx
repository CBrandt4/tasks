import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [num1, setNum1] = useState<number>(1);
    const [num2, setNum2] = useState<number>(6);

    const rollLeft = () => {
        setNum1(d6());
    };
    const rollRight = () => {
        setNum2(d6());
    };

    return (
        <div>
            <span>
                <Button onClick={rollLeft}>Roll Left</Button>
            </span>
            <span data-testid="left-die">{num1}</span>

            <span>
                <Button onClick={rollRight}>Roll Right</Button>
                {num1 === 1 && num2 === 1 && <div>Lose</div>}
                {num1 === num2 && num1 !== 1 && <div>Win</div>}
                <span data-testid="right-die">{num2}</span>
            </span>
        </div>
    );
}
