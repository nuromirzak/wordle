import React from "react";

interface KeyProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    type: KeyType;
}

export enum KeyType {
    DEFAULT = "default",
    DELETE = "delete",
    SUBMIT = "submit"
}

export default function Key({text, onClick, type}: KeyProps) {
    return (
        <button className={`wordle-keyboard-button ${type}`} onClick={onClick}>
            {text}
        </button>
    );
}
