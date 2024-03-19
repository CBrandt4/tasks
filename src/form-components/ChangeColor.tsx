import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [thecolor, setColor] = useState<string>("red");
    const COLORS: string[] = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "pink",
        "purple",
        "cyan"
    ];

    const updateColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {COLORS.map((color, index) => (
                    <Form.Check
                        key={index}
                        inline
                        type="radio"
                        id={`color-${index}`}
                        label={color}
                        value={color}
                        checked={thecolor === color}
                        onChange={updateColor}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: thecolor,
                    width: "70px",
                    height: "30px",
                    margin: "20px 0",
                    display: "inline-block"
                }}
            >
                {thecolor}
            </div>
        </div>
    );
}
