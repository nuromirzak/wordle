import Row from "./Row";
import {rowCount} from "../../constant";
import React from "react";

interface GridProps {
    matchWord: string;
    attempts: string[];
    currentAttempt: string;
}

export default function Grid({matchWord, attempts, currentAttempt}: GridProps) {
    const rows: React.ReactComponentElement<typeof Row>[] = [];

    for (let i = 0; i < attempts.length; i++) {
        rows.push(
            <Row
                key={i}
                matchWord={matchWord}
                attempt={attempts[i]}
                finished={true}
            />
        );
    }

    if (attempts.length < rowCount) {
        rows.push(
            <Row
                key={attempts.length}
                matchWord={matchWord}
                attempt={currentAttempt}
                finished={false}
            />
        );
    }


    for (let i = attempts.length + 1; i < rowCount; i++) {
        rows.push(
            <Row
                key={i}
                matchWord={matchWord}
                attempt={""}
                finished={false}
            />
        );
    }

    return (
        <div className="wordle-grid">
            {rows}
        </div>
    );
}
