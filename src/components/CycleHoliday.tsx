import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holidayIndex, setHolidayIndex] = useState<string>("🎄");

    const nextA = () => {
        let nextIndex = "🎄";
        if (holidayIndex === "🎄") {
            nextIndex = "✝️";
        } else if (holidayIndex === "✝️") {
            nextIndex = "🦅";
        } else if (holidayIndex === "👍") {
            nextIndex = "🎂";
        } else if (holidayIndex === "🎂") {
            nextIndex = "🎄";
        } else if (holidayIndex === "🦅") {
            nextIndex = "👍";
        }
        setHolidayIndex(nextIndex);
    };

    const nextY = () => {
        let nextIndex = "🎄";
        if (holidayIndex === "🎄") {
            nextIndex = "👍";
        } else if (holidayIndex === "✝️") {
            nextIndex = "🎂";
        } else if (holidayIndex === "👍") {
            nextIndex = "✝️";
        } else if (holidayIndex === "🎂") {
            nextIndex = "🦅";
        } else if (holidayIndex === "🦅") {
            nextIndex = "🎄";
        }
        setHolidayIndex(nextIndex);
    };

    return (
        <div>
            <span>
                <Button onClick={nextA}>Advance by Alphabet</Button>
            </span>
            <span>
                <Button onClick={nextY}>Advance by Year</Button>
            </span>
            <span>Holiday: {holidayIndex}</span>
        </div>
    );
}
