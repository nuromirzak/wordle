import Key from "./Key";
import React from "react";

interface KeyboardProps {
    keys: React.ReactComponentElement<typeof Key>[];
}

export default function Row({keys}: KeyboardProps) {
    return (
        <div className="wordle-keyboard-row">
            {keys}
        </div>
    );
}