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
    const [die1, setDie1] = useState<number>(3);
    const [die2, setDie2] = useState<number>(6);

    return (
        <div>
            <span data-testid="left-die">{die1}</span>
            <Button onClick={() => setDie1(d6())}>Roll Left</Button>
            <Button onClick={() => setDie2(d6())}>Roll Right</Button>
            <span data-testid="right-die">{die2}</span>
            {die1 === die2 && die1 !== 1 ? <span>You Win</span> : ""}
            {die1 === die2 && die1 === 1 ? <span>You Lose</span> : ""}
        </div>
    );
}
