import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProg, setProg] = useState<boolean>(false);

    const mully = () => {
        if (!inProg) {
            setAttempts(attempts + 1);
        }
    };
    const starty = () => {
        if (attempts > 0) {
            setProg(true);
            setAttempts(attempts - 1);
        }
    };

    const stoppy = () => {
        setProg(false);
    };

    return (
        <div>
            <span>
                <Button onClick={starty} disabled={attempts === 0 || inProg}>
                    Start Quiz
                </Button>
            </span>
            <span>
                <Button onClick={mully} disabled={inProg}>
                    Mulligan
                </Button>
            </span>
            <span>
                <Button onClick={stoppy} disabled={!inProg}>
                    Stop Quiz
                </Button>
            </span>
            {attempts}
        </div>
    );
}
