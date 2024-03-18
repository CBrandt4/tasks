import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({ colorIndex, setColorIndex }) {
    const nextColor = () => {
        setColorIndex((colorIndex + 1) % COLORS.length);
    };

    return <Button onClick={nextColor}>Next Color</Button>;
}

ChangeColor.propTypes = {
    //needed to fix ESLint error?
    colorIndex: PropTypes.number.isRequired,
    setColorIndex: PropTypes.func.isRequired
};

function ColorPreview({ color }) {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

ColorPreview.propTypes = {
    color: PropTypes.string.isRequired
};

export function ColoredBox() {
    const [colorIndex, setColorIndex] = useState(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    colorIndex={colorIndex}
                    setColorIndex={setColorIndex}
                />
                <ColorPreview color={COLORS[colorIndex]} />
            </div>
        </div>
    );
}
